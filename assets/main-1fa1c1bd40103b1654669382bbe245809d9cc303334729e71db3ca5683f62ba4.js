var CountUp=function(t,a,n,e,i,r){function o(t){var a,n,e,i,r,o,s=t<0;if(t=Math.abs(t).toFixed(l.decimals),t+="",a=t.split("."),n=a[0],e=a.length>1?l.options.decimal+a[1]:"",l.options.useGrouping){for(i="",r=0,o=n.length;r<o;++r)0!==r&&r%3==0&&(i=l.options.separator+i),i=n[o-r-1]+i;n=i}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return l.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return l.options.numerals[+t]})),(s?"-":"")+l.options.prefix+n+e+l.options.suffix}function s(t,a,n,e){return n*(1-Math.pow(2,-10*t/e))*1024/1023+a}function u(t){return"number"==typeof t&&!isNaN(t)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var c=0,d=["webkit","moz","ms","o"],p=0;p<d.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[d[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[p]+"CancelAnimationFrame"]||window[d[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var a=(new Date).getTime(),n=Math.max(0,16-(a-c)),e=window.setTimeout(function(){t(a+n)},n);return c=a+n,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof t?document.getElementById(t):t,l.d?(l.startVal=Number(a),l.endVal=Number(n),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+a+") or endVal ("+n+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(t){var a=l.options.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=a:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=a:this.d.innerHTML=a},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var a=t-l.startTime;l.remaining=l.duration-a,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(a,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(a,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(a/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(a/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),a<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){l.initialize()&&(l.callback=t,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(t){if(l.initialize()){if(t=Number(t),!u(t))return void(l.error="[CountUp] update() - new endVal is not a number: "+t);l.error="",t!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=t,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};document.addEventListener("DOMContentLoaded",function(){function t(t,a,n){var e=function(t,a,n,e){var i=(t/=e)*t;return a+n*(i*t+-3*i+3*t)},i={useEasing:!0,easingFn:e,useGrouping:!0,separator:",",decimal:"."},r=new CountUp(t,a,n,0,1.5,i);r.error?console.error(r.error):r.start()}function a(t){return Array.prototype.slice.call(document.querySelectorAll(t),0)}function n(){var t=a(".navbar-burger");t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var a=document.getElementById(t.dataset.target);t.classList.toggle("is-active"),a.classList.toggle("is-active")})})}function e(){a(".navbar-item").forEach(function(t){t.pathname&&window.location.pathname.split("/")[1]==t.pathname.split("/")[1]&&t.classList.toggle("is-active")})}"sponsorship"==window.location.pathname.split("/")[1]&&(t("articles-counter-upper",1e3,1234),t("dau-counter-upper",400,456),t("impressions-counter-upper",700,789),t("likes-counter-upper",500,567)),e(),n()});