/* Site navigation: plain JavaScript, independent of jQuery or any other library, so it always runs.
   All in-page navigation (header logo, desktop nav, mobile nav, skip link, hero "View the
   portfolio", and the service-pricing cards) is built from <button data-section="id"> elements,
   never <a href="#id">. There is no href to navigate, no URL change, and nothing for iOS to show
   a "Open Link" popup for; a click only ever calls scrollIntoView() on the matching section. */
(function () {
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('mobileNav');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setMenu(open) {
    nav.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  }

  btn.addEventListener('click', function () { setMenu(nav.classList.contains('hidden')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  document.addEventListener('click', function (e) {
    var sBtn = e.target.closest && e.target.closest('button[data-section]');
    if (!sBtn) return;
    var id = sBtn.getAttribute('data-section');
    if (!id) return;
    if (nav.contains(sBtn)) setMenu(false);            // close the mobile menu after a selection
    var target = document.getElementById(id);
    if (!target || target.classList.contains('hidden')) return;
    requestAnimationFrame(function () {
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });   // honours each section's scroll margin under the sticky header
    });
  });
})();
