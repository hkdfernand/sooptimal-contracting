(function () {
  var SO = window.SO || {};
  // mobile menu
  var m = document.querySelector('.menu'), l = document.getElementById('navlinks');
  if (m && l) m.addEventListener('click', function () {
    var o = l.classList.toggle('open'); m.setAttribute('aria-expanded', o);
  });
  // phone click tracking (GA4 event + Google Ads conversion when configured)
  document.querySelectorAll('[data-call]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (!window.gtag) return;
      gtag('event', 'phone_click', { link_url: a.href });
      if (SO.gads_id && SO.gads_call_label) gtag('event', 'conversion', { send_to: SO.gads_id + '/' + SO.gads_call_label });
    });
  });
  // carry ad click ids and UTM tags into the lead so you can see which ad produced it
  var qs = new URLSearchParams(location.search);
  document.querySelectorAll('form.quote').forEach(function (f) {
    ['gclid', 'utm_source', 'utm_campaign', 'utm_term'].forEach(function (k) {
      var i = document.createElement('input'); i.type = 'hidden'; i.name = k; i.value = qs.get(k) || ''; f.appendChild(i);
    });
    var p = document.createElement('input'); p.type = 'hidden'; p.name = 'page'; p.value = location.pathname; f.appendChild(p);
    // forms only send on the live host; anywhere else show a notice instead of failing
    var live = /(^|\.)sooptimal\.com$|vercel\.app$/.test(location.hostname);
    if (!live) f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var msg = f.querySelector('.form-msg');
      msg.hidden = false; msg.textContent = 'Preview mode: this form sends once the site is live on sooptimal.com.';
    });
  });
})();
