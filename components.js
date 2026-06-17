// Inject nav and footer into every page
function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function injectNav() {
  const page = getCurrentPage();
  const links = [
    { href: 'index.html',    label: 'Home' },
    { href: 'about.html',    label: 'About' },
    { href: 'invest.html',   label: 'Invest' },
    { href: 'company.html',  label: 'Company' },
    { href: 'services.html', label: 'Services' },
    { href: 'books.html',    label: 'Books' },
    { href: 'media.html',    label: 'Media' },
    { href: 'contact.html',  label: 'Contact' },
  ];
  const navHTML = `
    <nav>
      <a class="nav-logo" href="index.html">Sly Buford</a>
      <div class="nav-links">
        ${links.map(l => `<a href="${l.href}" class="${page === l.href ? 'active' : ''}">${l.label}</a>`).join('')}
        <a href="invest.html" class="nav-cta">Partner With Me</a>
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
        <a href="about.html">About</a>
        <a href="books.html">Books</a>
        <a href="invest.html">Invest</a>
        <a href="services.html">Services</a>
        <a href="media.html">Media</a>
        <a href="contact.html">Contact</a>
      </div>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});
