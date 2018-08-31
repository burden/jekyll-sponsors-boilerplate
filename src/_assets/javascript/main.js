//= require countUp.js/countUp.js

document.addEventListener('DOMContentLoaded', function () {

  // Set is-active in navbar for current page
  // Get current page URL
  var url = window.location.href;

  // Loop all .navbar-item elements
  getAll('.navbar-item').forEach(function ($el) {
    var ahref = $el.href;
    if (getUri(url) == getUri(ahref)) {
      $el.classList.toggle('is-active');
    }
  });

  // Get all "navbar-burger" elements
  var $navbarBurgers = getAll('.navbar-burger');
  // Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // Initialization for sponsorship page
  if (getUri(url) == 'sponsorship') {
    add_counter('articles-counter-upper', 3000, 3456);
    add_counter('dau-counter-upper', 75, 123);
    add_counter('impressions-counter-upper', 375, 456);
    add_counter('likes-counter-upper', 690, 789);
  }

  function add_counter(id, start, end) {
    var oCubic = function(t, b, c, d) {
      var ts = (t /= d) * t;
      var tc = ts * t;
      return b + c * (tc + -3 * ts + 3 * t);
    }

    var count_options = {
      useEasing: true,
      easingFn: oCubic,
      useGrouping: false,
      separator: ',',
      decimal: '.',
    };

    var counter = new CountUp(id, start, end, 0, 1.5, count_options)

    if (!counter.error) {
      counter.start();
    } else {
      console.error(counter.error);
    }
  }

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  function getUri(url) {
    // remove # from URL
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    // remove parameters from URL
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    // select file name
    url = url.substr(url.lastIndexOf("/") + 1);
    return url
  }
});
