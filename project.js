/* Project page: left scroll marker, sidebar phase sync, page transitions */
(function () {
  var fill = document.getElementById('scrollFillLeft');
  var marker = document.getElementById('markerLeft');
  var phases = document.querySelectorAll('[data-phase]');
  var stories = document.querySelectorAll('[data-story]');
  var sync = document.body.hasAttribute('data-sync');
  var current = -1;

  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    var h = window.innerHeight * 0.5 * p;
    fill.style.height = h + 'px';
    marker.style.top = 'calc(6rem + ' + h + 'px)';
    if (!sync) return;
    var mid = window.innerHeight * 0.5, phase = Number(phases[0] && phases[0].getAttribute('data-phase')) || 0;
    phases.forEach(function (el) { if (el.getBoundingClientRect().top < mid) phase = Number(el.getAttribute('data-phase')); });
    if (phase !== current) {
      current = phase;
      stories.forEach(function (s) { s.classList.toggle('is-current', Number(s.getAttribute('data-story')) === phase); });
    }
  }

  document.querySelectorAll('a[data-pt]').forEach(function (a) {
    var dir = a.getAttribute('data-pt');
    if (dir === 'fwd') {
      var pre = function () { if (window.PageTransition) window.PageTransition.prefetch(a.getAttribute('href')); };
      a.addEventListener('mouseenter', pre);
      a.addEventListener('focus', pre);
      a.addEventListener('touchstart', pre, { passive: true });
    }
    a.addEventListener('click', function (e) {
      if (!window.PageTransition || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      window.PageTransition.go(a.getAttribute('href'), dir);
    });
  });

  // Warm up the home so the way back starts instantly
  window.addEventListener('load', function () {
    setTimeout(function () { if (window.PageTransition) window.PageTransition.prefetch('index.html', 'back'); }, 1200);
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
