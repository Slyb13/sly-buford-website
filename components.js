// Inject nav and footer into every page
function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || '';
  // Handle both 'index.html' and '' and 'index'
  if (path === 'index.html' || path === 'index' || path === '') return 'index';
  return path.replace('.html', '');
}

function injectNav() {
  const page = getCurrentPage();
  const links = [
    { href: '/',          id: 'index',    label: 'Home' },
    { href: '/about',     id: 'about',    label: 'About' },
    { href: '/invest',    id: 'invest',   label: 'Invest' },
    { href: '/company',   id: 'company',  label: 'Company' },
    { href: '/services',  id: 'services', label: 'Services' },
    { href: '/books',     id: 'books',    label: 'Books' },
    { href: '/media',     id: 'media',    label: 'Media' },
    { href: '/contact',   id: 'contact',  label: 'Contact' },
  ];
  const navHTML = `
    <nav>
      <a class="nav-logo" href="/">Sly Buford</a>
      <div class="nav-links">
        ${links.map(l => `<a href="${l.href}" class="${page === l.id ? 'active' : ''}">${l.label}</a>`).join('')}
        <a href="/invest" class="nav-cta">Partner With Me</a>
      </div>
    </nav>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function injectFooter() {
  const footerHTML = `
    <div class="social-row">
      <span class="soc-label">Connect with Sly</span>
      <div class="soc-links">
        <a class="soc-link" href="#" title="YouTube">YT</a>
        <a class="soc-link" href="#" title="LinkedIn">in</a>
        <a class="soc-link" href="#" title="Facebook">Fb</a>
        <a class="soc-link" href="#" title="Instagram">Ig</a>
        <a class="soc-link" href="#" title="Twitter/X">X</a>
      </div>
    </div>
    <footer>
      <div>
        <div class="footer-brand">Sly Buford</div>
        <div class="footer-copy">© 2025 S. Buford Enterprises. All Rights Reserved.</div>
      </div>
      <div class="footer-links">
        <a href="/about">About</a>
        <a href="/books">Books</a>
        <a href="/invest">Invest</a>
        <a href="/services">Services</a>
        <a href="/media">Media</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});
