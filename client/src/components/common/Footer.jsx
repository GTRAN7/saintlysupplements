import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/veterans', label: 'Veterans' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/get-involved', label: 'Get Involved' },
  ];

  const supportLinks = [
    { path: '/donate', label: 'Donate' },
    { path: '/partners', label: 'Corporate Partners' },
    { path: 'https://saintly-supplements.myshopify.com/', label: 'Shop', external: true },
    { path: '/contact', label: 'Contact Us' },
  ];

  const conditions = [
    'Neuropathy',
    'Back Pain',
    'Cardiovascular Health',
    'Bone Loss',
    'Vision Problems',
  ];

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z" 
            fill="var(--dark-navy)"
          />
        </svg>
      </div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src="/logoandtext.png" alt="Saintly Supplements" className="footer-logo-img" />
              </Link>
              
              <p className="footer-mission">
                We exist to close the health gap by providing high-quality supplements accessible for veterans facing chronic conditions and financial hardship.
              </p>
              
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="footer-column">
              <h4>Support Us</h4>
              <ul>
                {supportLinks.map((link) => (
                  <li key={link.path}>
                    {link.external ? (
                      <a href={link.path} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ) : (
                      <Link to={link.path}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions We Support */}
            <div className="footer-column">
              <h4>Conditions We Support</h4>
              <ul>
                {conditions.map((condition) => (
                  <li key={condition}>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Saintly Supplements. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

