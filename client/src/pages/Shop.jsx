import { Link } from 'react-router-dom';
import './PageStyles.css';

const Shop = () => {
  return (
    <main className="page shop-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Support Our Mission
            </span>
            <h1>Shop</h1>
            <p>
              Every purchase helps us provide free supplements to those in need.
            </p>
          </div>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C320,100 640,0 960,60 C1280,120 1440,40 1440,40 L1440,120 L0,120 Z" fill="var(--soft-white)"/>
          </svg>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shop-coming-soon">
            <div className="coming-soon-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <h2>Shop Coming Soon!</h2>
            <p>
              We're working on bringing you merchandise and products that support our mission. 
              Check back soon or sign up for our newsletter to be notified when our shop launches.
            </p>
            
            <div className="shop-preview">
              <h3>What to Expect</h3>
              <div className="preview-items">
                <div className="preview-item">
                  <div className="preview-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
                    </svg>
                  </div>
                  <span>Branded Apparel</span>
                </div>
                <div className="preview-item">
                  <div className="preview-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 12 20 22 4 22 4 12"/>
                      <rect x="2" y="7" width="20" height="5"/>
                      <line x1="12" y1="22" x2="12" y2="7"/>
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                    </svg>
                  </div>
                  <span>Gift Packages</span>
                </div>
                <div className="preview-item">
                  <div className="preview-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <span>Care Kits</span>
                </div>
              </div>
            </div>

            <div className="shop-cta">
              <p>In the meantime, you can support us directly:</p>
              <div className="cta-buttons">
                <Link to="/donate" className="btn btn-primary">Make a Donation</Link>
                <Link to="/get-involved" className="btn btn-outline">Volunteer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;

