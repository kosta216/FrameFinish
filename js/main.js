/* FrameFinish Website — allgemeine UI-Interaktion
 * (mobiles Menü, Footer-Jahr, sanftes Scrollen für Anker)
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Mobiles Menü auf-/zuklappen
    var toggle = document.querySelector('[data-nav-toggle]');
    var menu = document.querySelector('[data-nav-menu]');
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      // Klick auf einen Menüpunkt schließt das mobile Menü wieder
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { menu.classList.remove('open'); });
      });
    }

    // Aktuelles Jahr im Footer
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // Header-Schatten beim Scrollen
    var header = document.querySelector('.site-header');
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 8) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  });
})();
