(() => {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(() => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.querySelector('#main-navigation');

    if (menuToggle && mainNavigation) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mainNavigation.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      });

      mainNavigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mainNavigation.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', 'Open menu');
        });
      });
    }

    function updateNavbar() {
      if (!navbar) return;
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 24);
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  });
})();
