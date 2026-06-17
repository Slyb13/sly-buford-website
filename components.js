function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || '';
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
      <div class="nav-links" id="nav-links">
        ${links.map(l => `<a href="${l.href}" class="${page === l.id ? 'active' : ''}">${l.label}</a>`).join('')}
        <a href="/invest" class="nav-cta">Partner With Me</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <style>
      .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        z-index: 200;
      }
      .hamburger span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--white);
        border-radius: 2px;
        transition: all 0.3s;
      }
      .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      .hamburger.open span:nth-child(2) { opacity: 0; }
      .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

      @media (max-width: 900px) {
        .hamburger { display: flex; }
        .nav-links {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(10,10,10,0.98);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          z-index: 150;
        }
        .nav-links.open { display: flex; }
        .nav-links a {
          font-size: 1.1rem !important;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.8) !important;
        }
        .nav-links a:hover { color: var(--white) !important; }
        .nav-links .nav-cta {
          margin-top: 1rem;
          padding: 0.85rem 2.5rem !important;
          font-size: 0.85rem !important;
          background: var(--green) !important;
          color: var(--white) !important;
          border-radius: 2px;
        }
      }
    </style>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
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
