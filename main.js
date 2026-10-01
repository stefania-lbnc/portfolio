/* Home: hero wipe, frame markers, footer colour, works preview, contact copy */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var clamp01 = function (t) { return Math.min(Math.max(t, 0), 1); };
  var DARK = '#110E03', LIGHT = '#FCF9EE';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var heroPin = $('heroPin'), bgSplit = $('bgSplit'), frame = $('frameFixed');
  var trackLeft = $('trackLeft'), fillLeft = $('fillLeft'), fillRight = $('fillRight');
  var markerLeft = $('markerLeft'), markerRight = $('markerRight'), sweep = $('sweepLine');
  var s1 = $('heroSlide1'), s2 = $('heroSlide2'), card = $('contact'), tail = $('worksTail');
  var footerEls = document.querySelectorAll('#siteFooter [data-fe]');

  function geo() {
    var top = trackLeft.offsetTop, h = trackLeft.getBoundingClientRect().height;
    return { top: top, h: h, bottom: top + h };
  }
  function introRange() { return Math.max(heroPin.offsetHeight - window.innerHeight, 1); }

  function markers() {
    var g = geo();
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? clamp01(window.scrollY / max) : 0;
    var ly = lerp(g.bottom, g.top, p), ry = lerp(g.top, g.bottom, p);
    markerLeft.style.top = ly + 'px';
    markerRight.style.top = ry + 'px';
    fillLeft.style.top = ly + 'px';
    fillLeft.style.height = Math.max(g.bottom - ly, 0) + 'px';
    fillRight.style.top = g.top + 'px';
    fillRight.style.height = Math.max(ry - g.top, 0) + 'px';
  }

  function hero(pct) {
    var ih = window.innerHeight, iw = window.innerWidth, g = geo();
    var c = lerp(0.95, 0.05, pct) * ih;
    var half = (g.h / 4) * (1 - 2 * pct);
    var tl = ((c - half) / ih) * 100, tr = ((c + half) / ih) * 100;
    var edgeY = function (x) { return (tl + (tr - tl) * x / iw) / 100 * ih; };
    var lx = markerLeft.getBoundingClientRect().left + 3.5;
    var rx = markerRight.getBoundingClientRect().left + 3.5;
    sweep.setAttribute('x1', lx); sweep.setAttribute('y1', edgeY(lx));
    sweep.setAttribute('x2', rx); sweep.setAttribute('y2', edgeY(rx));
    sweep.style.opacity = pct > 0.001 && pct < 0.999 ? '0.6' : '0';
    sweep.style.stroke = pct > 0.5 ? LIGHT : DARK;
    var below = 'polygon(0% ' + tl + '%, 100% ' + tr + '%, 100% 100%, 0% 100%)';
    s1.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% ' + tr + '%, 0% ' + tl + '%)';
    s2.style.clipPath = below;
    bgSplit.style.clipPath = below;
    s1.style.transform = 'scale(' + (1 - 0.18 * pct) + ')';
    s2.style.transform = 'scale(' + (0.82 + 0.18 * pct) + ')';
    footerEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      el.style.color = r.top + r.height / 2 > edgeY(r.left + r.width / 2) ? LIGHT : DARK;
    });
    frame.style.color = pct > 0.5 ? LIGHT : DARK;
  }

  function afterHero() {
    var ih = window.innerHeight, iw = window.innerWidth, g = geo();
    var past = Math.max(-heroPin.getBoundingClientRect().bottom, 0);
    var p = clamp01(past / (ih * 0.4));
    if (p >= 1) bgSplit.style.clipPath = 'none';
    else {
      var c = 0.05 * ih, h = -(g.h / 4);
      var el = ((c - h) / ih) * 100, er = ((c + h) / ih) * 100;
      bgSplit.style.clipPath = 'polygon(0% ' + lerp(el, -15, p) + '%, 100% ' + lerp(er, -15, p) + '%, 100% 100%, 0% 100%)';
    }
    sweep.style.opacity = '0';
    var ct = card.getBoundingClientRect().top;
    var cardEdge = function (x) { return ct + 0.12 * ih * (x / iw); };
    footerEls.forEach(function (e) {
      var r = e.getBoundingClientRect();
      e.style.color = r.top + r.height / 2 > cardEdge(r.left + r.width / 2) ? DARK : LIGHT;
    });
    frame.style.color = g.top + g.h / 2 > cardEdge(iw / 2) ? DARK : LIGHT;
  }

  function onScroll() {
    var y = window.scrollY, range = introRange();
    hero(clamp01(y / range));
    if (y > range) afterHero();
    markers();
  }
  function measure() { tail.style.top = Math.min(0, window.innerHeight - tail.offsetHeight) + 'px'; }

  // Intro: hold, then sweep once. Any input hands control back to the visitor.
  var HOLD = 2600, SWEEP = 1100, start = null;
  var ease = function (t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
  var embedded = window.name === 'pt-frame';
  var took = reduced || window.scrollY > 0 || !!location.hash || !!window.__ptArrived || embedded;
  function takeOver() { took = true; }
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (e) { window.addEventListener(e, takeOver, { passive: true }); });
  function auto(now) {
    if (took) return;
    if (start === null) start = now;
    var t = now - start;
    var pct = t < HOLD ? 0 : t < HOLD + SWEEP ? ease((t - HOLD) / SWEEP) : 1;
    window.scrollTo({ top: pct * introRange(), behavior: 'instant' });
    if (t < HOLD + SWEEP) requestAnimationFrame(auto);
  }

  // Coming back from a project: restore where the visitor left the index
  if (window.__ptArrived === 'back' || embedded) {
    var y = 0;
    try { y = Number(sessionStorage.getItem('pt-home-y')) || 0; } catch (e) {}
    var restore = function () { window.scrollTo({ top: y, behavior: 'instant' }); };
    restore(); setTimeout(restore, 100);
  }

  // Works index: hover dims the others and swaps the preview
  var list = document.querySelector('.works-list');
  var imgs = document.querySelectorAll('.preview-frame img');
  var label = $('previewLabel');
  document.querySelectorAll('.work-row[href]').forEach(function (row) {
    var i = Number(row.getAttribute('data-i'));
    var enter = function () {
      list.classList.add('is-hovering');
      row.classList.add('is-hover');
      imgs.forEach(function (im, k) { im.classList.toggle('is-active', k === i); });
      label.textContent = String(i + 1).padStart(2, '0') + ' — ' + row.querySelector('.areas').textContent;
      if (window.PageTransition) window.PageTransition.prefetch(row.getAttribute('href'));
    };
    var leave = function () { list.classList.remove('is-hovering'); row.classList.remove('is-hover'); };
    row.addEventListener('mouseenter', enter);
    row.addEventListener('focus', enter);
    row.addEventListener('touchstart', enter, { passive: true });
    row.addEventListener('mouseleave', leave);
    row.addEventListener('blur', leave);
    row.addEventListener('click', function (e) {
      if (!window.PageTransition || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      try { sessionStorage.setItem('pt-home-y', String(window.scrollY)); } catch (err) {}
      window.PageTransition.go(row.getAttribute('href'), 'fwd');
    });
  });

  // Contact: copy email
  var copyBtn = $('copyEmail'), t;
  copyBtn.addEventListener('click', function () {
    var done = function () { copyBtn.textContent = 'Copied ✓'; clearTimeout(t); t = setTimeout(function () { copyBtn.textContent = 'Copy email'; }, 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText('lobiancostefania@gmail.com').then(done, done); else done();
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { measure(); onScroll(); });
  window.addEventListener('load', function () { measure(); onScroll(); });
  measure(); onScroll();
  requestAnimationFrame(auto);
})();
