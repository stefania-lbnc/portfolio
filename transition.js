/* Page transition
   Home → project: the real project page rises like the contact card (transform only, GPU).
   Project → home: the home is wiped back in from the top along the same diagonal.
   PageTransition.prefetch(url) on hover; PageTransition.go(url, 'fwd' | 'back'). */
(function () {
  var KEY = 'pt', DUR = 650, CUT = 12, PAPER = '#FEFCF7';
  var CURVE = 'cubic-bezier(0.65, 0, 0.35, 1)';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cache = {};

  function frame(url, layout) {
    if (cache[url]) return cache[url];
    var el = document.createElement('div');
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('data-pt', '');
    var f = document.createElement('iframe');
    f.src = url;
    f.tabIndex = -1;
    f.name = 'pt-frame';
    f.setAttribute('scrolling', 'no');
    if (layout === 'rise') {
      // 12vh taller than the viewport; the diagonal lives in that extra strip, so only transform animates
      el.style.cssText = 'position:fixed;left:0;right:0;top:0;height:' + (100 + CUT) + 'vh;z-index:9999;pointer-events:none;background:' + PAPER + ';' +
        'clip-path:polygon(0 0, 100% ' + CUT + 'vh, 100% 100%, 0 100%);transform:translate3d(0,100vh,0);visibility:hidden;will-change:transform;';
      f.style.cssText = 'position:absolute;left:0;top:' + CUT + 'vh;width:100%;height:100vh;border:0;background:' + PAPER + ';';
    } else {
      el.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;visibility:hidden;';
      f.style.cssText = 'display:block;width:100%;height:100%;border:0;';
    }
    el.ready = new Promise(function (res) {
      f.addEventListener('load', function () { setTimeout(res, 200); }, { once: true });
    });
    el.appendChild(f);
    document.body.appendChild(el);
    cache[url] = el;
    return el;
  }

  function within(p, ms) { return Promise.race([p, new Promise(function (r) { setTimeout(r, ms); })]); }
  function save(v) { try { sessionStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  function after(el, cb) {
    var done = false;
    var fin = function () { if (!done) { done = true; cb(); } };
    el.addEventListener('transitionend', fin, { once: true });
    setTimeout(fin, DUR + 120);
  }

  function rise(url) {
    var el = frame(url, 'rise');
    el.style.pointerEvents = 'auto';
    within(el.ready, 800).then(function () {
      el.style.visibility = 'visible';
      el.getBoundingClientRect();
      el.style.transition = 'transform ' + DUR + 'ms ' + CURVE;
      el.style.transform = 'translate3d(0,' + (-CUT) + 'vh,0)';
      after(el, function () { save({ dir: 'fwd' }); location.href = url; });
    });
  }

  // edge = vh position of the diagonal's left end; everything above it shows the home
  function wipeClip(edge) {
    return 'polygon(0 0, 100% 0, 100% ' + (edge + CUT) + 'vh, 0 ' + edge + 'vh)';
  }
  function wipeBack(url) {
    var el = frame(url, 'wipe');
    el.style.pointerEvents = 'auto';
    el.style.clipPath = wipeClip(-CUT);
    within(el.ready, 900).then(function () {
      el.style.visibility = 'visible';
      el.getBoundingClientRect();
      el.style.transition = 'clip-path ' + DUR + 'ms ' + CURVE;
      el.style.clipPath = wipeClip(100);
      after(el, function () { save({ dir: 'back' }); location.href = url; });
    });
  }

  window.PageTransition = {
    prefetch: function (url, dir) {
      if (reduced || !document.body) return;
      frame(url, dir === 'back' ? 'wipe' : 'rise');
    },
    go: function (url, dir) {
      if (reduced) { location.href = url; return; }
      if (dir === 'back') wipeBack(url); else rise(url);
    }
  };

  try {
    var raw = sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
    if (raw) window.__ptArrived = JSON.parse(raw).dir;
  } catch (e) {}

  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    var stale = document.querySelectorAll('[data-pt]');
    for (var i = 0; i < stale.length; i++) stale[i].remove();
    cache = {};
  });
})();
