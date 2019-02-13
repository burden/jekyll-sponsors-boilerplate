//= require countUp.js/countUp.js
document.addEventListener('DOMContentLoaded', function () {
  // Initialization for sponsorship page
  if (window.location.pathname.split("/")[1] == 'sponsorship') {
    // EDIT ZONE
    // ################
    // ex: add_counter('id', begin, end)
    add_counter('articles-counter-upper', 1000, 1234);
    add_counter('dau-counter-upper', 400, 456);
    add_counter('impressions-counter-upper', 700, 789);
    add_counter('likes-counter-upper', 500, 567);  
    // ################
    // NO MORE EDITING
  }

  toggleActiveNav();
  initHamburgers();

  function add_counter(id, start, end) {
    var oCubic = function(t, b, c, d) {
      var ts = (t /= d) * t;
      var tc = ts * t;
      return b + c * (tc + -3 * ts + 3 * t);
    }

    var count_options = {
      useEasing: true,
      easingFn: oCubic,
      useGrouping: true,
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
  
  // get all instances of dom element via css selector
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
  
  // initialize mobile menu toggle
  function initHamburgers() {
    var navbarBurgers = getAll('.navbar-burger');
    if (navbarBurgers.length > 0) {
      navbarBurgers.forEach(function(el) {
        el.addEventListener('click', function() {
          var target = document.getElementById(el.dataset.target);
          el.classList.toggle('is-active');
          target.classList.toggle('is-active');
        });
      });
    }  
  }
  
  // Set is-active in navbar for current page
  function toggleActiveNav() {
    getAll('.navbar-item').forEach(function (el) {
      if (el.pathname) {
        if (window.location.pathname.split("/")[1] == el.pathname.split("/")[1]) {
          el.classList.toggle('is-active');
        }
      }
    });
  }
});
