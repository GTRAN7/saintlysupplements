import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/partners', label: 'Corporate Partners' },
    { path: '/shop', label: 'Shop' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wings */}
              <path 
                d="M30 12C25 8 18 6 10 8C14 12 16 18 16 24C18 20 22 16 30 12Z" 
                fill="currentColor" 
                opacity="0.9"
              />
              <path 
                d="M30 12C35 8 42 6 50 8C46 12 44 18 44 24C42 20 38 16 30 12Z" 
                fill="currentColor" 
                opacity="0.9"
              />
              {/* Halo */}
              <ellipse cx="30" cy="6" rx="8" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">SAINTLY</span>
            <span className="logo-tagline">SUPPLEMENTS</span>
          </div>
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="navbar-actions">
            <Link to="/donate" className="btn btn-donate">
              Donate
            </Link>
            <Link to="/cart" className="cart-icon" aria-label="Shopping Cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </Link>
          </div>
        </div>

        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

