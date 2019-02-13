[![Build Status](https://travis-ci.org/burden/jekyll-sponsors-boilerplate.svg?branch=master)](https://travis-ci.org/burden/jekyll-sponsors-boilerplate)

# jekyll-sponsors-boilerplate

A Jekyll theme for giving thanks to your sponsors made extraordinary using Bulma.

**[DEMO](https://jekyll-sponsors-boilerplate.burden.cc)**

![jekyll-sponsors-boilerplate](https://raw.githubusercontent.com/burden/jekyll-sponsors-boilerplate/master/screenshot.png)

## Features
- [Bulma 0.7.4](https://github.com/jgthms/bulma/tree/0.7.4)
- Dependency management: [bower](https://bower.io)
- Asset pipeline: [jekyll-assets](https://rubygems.org/gems/jekyll-assets)
  - [JS uglifier](https://rubygems.org/gems/uglifier/versions/3.2.0)
- HTML compression: [compress.html](http://jch.penibelst.de/)
- Testing: [html-proofer](https://github.com/gjtorikian/html-proofer)
- Analytics: [Google Analytics](https://www.google.com/analytics/)
- Sponsors displayed using flexbox
- Animated counter: [countUp.js](https://github.com/inorganik/CountUp.js)
- [bulma-pricingtable](https://github.com/Wikiki/bulma-pricingtable)

## Dependencies

1. Install bundler `gem install bundler`
2. Install bower `npm install -g bower`

## Getting Started

```
$ bundle install
$ bower install
$ jekyll serve
```

## Configuring your sponsorship campaign

Everything you need to configure your sponsorship campaign can be found in `src/_data/campaign.yml`. 

### Counts

To configure the counter bar, update `src/_assets/javascript/main.js` and the `counts:` collection.

```js
// main.js
// EDIT ZONE
// ################
// ex: add_counter('id', begin, end)
add_counter('articles-counter-upper', 3000, 3456);
```
```yaml
# campaign.yml
options:
  counts:
    - id: articles-counter-upper
      label: Articles
      value: "3,456"
```

Be sure that the `id:` block is set to the same value as the first argument in the javascript statement (articles-counter-upper). The second argument (3000) specifies where the count begins. The `value:` block is a placeholder in the event js fails (3,456). 

If your number requires context, be sure to add a `context:` block

```yaml
# campaign.yml
# outputs "456K"
- id: dau-counter-upper
  label: DAU
  value: 456
  context: K
```

### Includes

You can configure strings to be used for repetitive incentives by adding a new sequence to the `includes:` collection. 

```yaml
# campaign.yml
options:
  includes:
    - id: free-hug
      value: >-
        Large color logo on Sponsors page and a bear hug
```
`id:` is referenced from `groups:` via the `items:` block  
`value:` is displayed when `id:` matches  

See examples below for usage

### Groups

You may choose to display plans individually, or in columns. Feel free to use both. Add as many groups and items as you need. 

To display plans individually.
```yaml
groups:
  - name: Lead Sponsor
    price: 2500
    per: month
    items:
      - id: free-hug
      - id: description
      - id: spacer
  - name: Principal Sponsor
    price: 5000
    per: month
    items:
      - id: free-hug
      - id: description
      - "One-off special perk"
```
To display in columns.
```yaml
groups:
  - name: Community Sponsor
    levels:
      - name: Bronze
        price: 500
        per: month
        items:
          - id: small-logo
          - id: spacer
          - id: spacer
      - name: Silver
        price: 750
        per: month
        items:
          - id: small-logo
          - id: slogan
          - id: spacer
```

## Adding Sponsors
Simply add a new sequence to `src/_data/sponsors.yml`

```yaml
- name: Principal Sponsor 1
  url: https://example.com
  logo: https://dummyimage.com/440x160/aaa/fff.png
  level: principal
  summary: >-
    Et eam consetetur deterruisset reprehendunt. Mea lorem primis consulatu et, eam semper alterum ei, his omnis malorum consectetuer id? In per similique posidonium, ei nam suscipit luptatum disputationi! Prodesset cotidieque ne eum! Gubergren deterruisset usu ea, sit et tollit voluptaria! Eu eum ferri facete, erroribus consulatu at vis?
```
`name:` Sponsor's name  
`logo:` Sponsor's logo (must be `440px x 160px` or `220px x 80px`)  
`level:` Sponsor's level  
`summary:`  Sponsor's slogan or message

## Deploy to Github Pages from Travis
1. Point Travis to repository
2. Configure Travis
3. Generate a [Personal Access Token](https://github.com/settings/tokens) from Github
  - The only scope needed is repo:public_repo
4. Set `GITHUB_API=<token>` on Travis
  - Make sure `Display value in build log` toggle is set to `Off`!
