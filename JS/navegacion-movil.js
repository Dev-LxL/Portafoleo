// Mejora progresiva: las secciones siguen disponibles sin JavaScript.
(function () {
  const header = document.querySelector('.topbar');
  const nav = header?.querySelector('.navlinks');
  if (!nav) return;
  const mobile = matchMedia('(max-width: 768px)');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mobile-menu-toggle';
  button.textContent = 'Menú';
  nav.id = 'mobile-sections';
  button.setAttribute('aria-controls', nav.id);
  button.setAttribute('aria-expanded', 'false');
  nav.before(button);
  header.classList.add('mobile-nav-ready');
  function close(restoreFocus = false) {
    button.setAttribute('aria-expanded', 'false');
    header.classList.remove('mobile-nav-open');
    if (restoreFocus) button.focus();
  }
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    header.classList.toggle('mobile-nav-open', open);
  });
  nav.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!mobile.matches || !link) return;
    close();
    // El foco sale del menú cerrado y acompaña la navegación por teclado.
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
    }
  });
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && header.classList.contains('mobile-nav-open')) {
      close(true);
    }
  });
  document.addEventListener('click', event => {
    if (mobile.matches && !header.contains(event.target)) close();
  });
  mobile.addEventListener('change', () => close());
})();
