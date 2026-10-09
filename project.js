/* Project page: footer, left scroll marker, page transitions */
(function () {
  // Footer — edit here once, every project page updates. Order = order of the works index.
  var PROJECTS = [
    ['magazine', 'A.D.E. Magazine'],
    ['blindex', 'Blindex'],
    ['equipe', 'Equipe'],
    ['lope', 'LØPE'],
    ['terraviva', 'Terraviva'],
    ['iccrom', 'ICCROM'],
    ['frimm', 'Frimm']
  ];
  var footer = document.querySelector('.project-footer[data-project]');
  if (footer) {
    var keys = PROJECTS.map(function (p) { return p[0]; });
    var i = keys.indexOf(footer.getAttribute('data-project'));
    var n = PROJECTS.length;
    var prev = PROJECTS[(i + n - 1) % n], next = PROJECTS[(i + 1) % n];
    var pad = function (k) { return String(k + 1).padStart(2, '0'); };
    footer.innerHTML =
      '<div class="footer-group">' +
        '<a href="index.html" data-pt="back">Home</a>' +
        '<a href="index.html#about">Manifesto</a>' +
      '</div>' +
      '<nav class="project-nav" aria-label="Projects">' +
        '<a href="' + prev[0] + '.html" data-pt="fwd">← ' + pad((i + n - 1) % n) + ' ' + prev[1] + '</a>' +
        '<a href="' + next[0] + '.html" data-pt="fwd">' + pad((i + 1) % n) + ' ' + next[1] + ' →</a>' +
      '</nav>' +
      '<div class="footer-group">' +
        '<a href="index.html#projects">Works</a>' +
        '<a href="index.html#contact">Contact</a>' +
      '</div>';
  }

  var fill = document.getElementById('scrollFillLeft');
  var marker = document.getElementById('markerLeft');

  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    var h = window.innerHeight * 0.5 * p;
    fill.style.height = h + 'px';
    marker.style.top = 'calc(6rem + ' + h + 'px)';
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

  // Links to a home section (Manifesto, Works, Contact): same way back, then the home glides to the section
  // Contact: the home's contact card rises over the project, like it does over the works index
  var CONTACT = { frame: 'index.html?pt=contact', bg: '#EDDCA0' };
  document.querySelectorAll('a[href="index.html#contact"]').forEach(function (a) {
    var pre = function () { if (window.PageTransition) window.PageTransition.prefetch('index.html', 'fwd', CONTACT); };
    a.addEventListener('mouseenter', pre);
    a.addEventListener('focus', pre);
    a.addEventListener('touchstart', pre, { passive: true });
    a.addEventListener('click', function (e) {
      if (!window.PageTransition || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      window.PageTransition.go('index.html#contact', 'fwd', CONTACT);
    });
  });

  document.querySelectorAll('a[href^="index.html#"]:not([href="index.html#contact"])').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (!window.PageTransition || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      try { sessionStorage.setItem('pt-home-hash', a.getAttribute('href').slice('index.html'.length)); } catch (err) {}
      window.PageTransition.go('index.html', 'back');
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
