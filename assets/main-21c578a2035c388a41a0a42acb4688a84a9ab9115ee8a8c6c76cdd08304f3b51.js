var CountUp=function(n,t,e,a,r,i){function o(n){var t,e,a,r,i,o,s=n<0;if(n=Math.abs(n).toFixed(l.decimals),n+="",t=n.split("."),e=t[0],a=t.length>1?l.options.decimal+t[1]:"",l.options.useGrouping){for(r="",i=0,o=e.length;i<o;++i)0!==i&&i%3==0&&(r=l.options.separator+r),r=e[o-i-1]+r;e=r}return l.options.numerals.length&&(e=e.replace(/[0-9]/g,function(n){return l.options.numerals[+n]}),a=a.replace(/[0-9]/g,function(n){return l.options.numerals[+n]})),(s?"-":"")+l.options.prefix+e+a+l.options.suffix}function s(n,t,e,a){return e*(1-Math.pow(2,-10*n/a))*1024/1023+t}function u(n){return"number"==typeof n&&!isNaN(n)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var m in l.options)i.hasOwnProperty(m)&&null!==i[m]&&(l.options[m]=i[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var c=0,d=["webkit","moz","ms","o"],p=0;p<d.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[d[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[p]+"CancelAnimationFrame"]||window[d[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var t=(new Date).getTime(),e=Math.max(0,16-(t-c)),a=window.setTimeout(function(){n(t+e)},e);return c=t+e,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof n?document.getElementById(n):n,l.d?(l.startVal=Number(t),l.endVal=Number(e),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(r)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+t+") or endVal ("+e+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(n){var t=l.options.formattingFn(n);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(n){l.startTime||(l.startTime=n),l.timestamp=n;var t=n-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(n){l.initialize()&&(l.callback=n,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(n){if(l.initialize()){if(n=Number(n),!u(n))return void(l.error="[CountUp] update() - new endVal is not a number: "+n);l.error="",n!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=n,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};document.addEventListener("DOMContentLoaded",function(){function n(n,t,e){var a=function(n,t,e,a){var r=(n/=a)*n;return t+e*(r*n+-3*r+3*n)},r={useEasing:!0,easingFn:a,useGrouping:!1,separator:",",decimal:"."},i=new CountUp(n,t,e,0,1.5,r);i.error?console.error(i.error):i.start()}function t(n){return Array.prototype.slice.call(document.querySelectorAll(n),0)}function e(n){return n=n.substring(0,-1==n.indexOf("#")?n.length:n.indexOf("#")),n=n.substring(0,-1==n.indexOf("?")?n.length:n.indexOf("?")),n=n.substr(n.lastIndexOf("/")+1)}var a=window.location.href;t(".navbar-item").forEach(function(n){var t=n.href;e(a)==e(t)&&n.classList.toggle("is-active")});var r=t(".navbar-burger");r.length>0&&r.forEach(function(n){n.addEventListener("click",function(){var t=n.dataset.target,e=document.getElementById(t);n.classList.toggle("is-active"),e.classList.toggle("is-active")})}),"sponsorship"==e(a)&&(n("articles-counter-upper",3e3,3456),n("dau-counter-upper",75,123),n("impressions-counter-upper",375,456),n("likes-counter-upper",690,789))});