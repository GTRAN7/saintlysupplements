import { Link } from 'react-router-dom';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Walgreens',
      description: 'Walgreens and its suppliers donate 1% of participating vitamin and supplement retail sales to Vitamin Angels.',
      website: 'https://www.walgreens.com',
      color: '#E31837',
    },
    {
      id: 2,
      name: 'Bayer',
      description: 'Through its Nutrient Gap Initiative, Bayer helps 4 million pregnant women and their babies each year access prenatal vitamins & minerals.',
      website: 'https://www.bayer.com',
      color: '#10857F',
    },
    {
      id: 3,
      name: 'SmartyPants Vitamins',
      description: 'Since 2011, SmartyPants has helped Vitamin Angels reach over 24 million women and children by making a matching 1-for-1 micronutrient grant for every bottle of vitamins sold.',
      website: 'https://www.smartypantsvitamins.com',
      color: '#FF6B35',
    },
  ];

  return (
    <main className="partners-page">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="partners-hero-bg">
          <div className="partners-blob partners-blob-1"></div>
          <div className="partners-blob partners-blob-2"></div>
          <div className="partners-pattern"></div>
        </div>
        
        <div className="container">
          <div className="partners-hero-content">
            <span className="hero-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              Partnership Opportunities
            </span>
            <h1>Corporate Partners</h1>
            <p>
              Together with our amazing corporate partners, we're making a real difference 
              in the lives of those who need it most. Their generosity helps us provide 
              essential supplements to thousands of people every year.
            </p>
          </div>
        </div>
        
        <div className="partners-hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path 
              d="M0,40 C320,100 640,0 960,60 C1280,120 1440,40 1440,40 L1440,120 L0,120 Z" 
              fill="var(--soft-white)"
            />
          </svg>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-section section">
        <div className="container">
          <div className="partners-intro">
            <h2>Our Valued Partners</h2>
            <p>
              These organizations share our vision of making health accessible to everyone, 
              regardless of their financial situation.
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div 
                key={partner.id} 
                className="partner-card"
                style={{ '--partner-color': partner.color, '--delay': `${index * 0.15}s` }}
              >
                <div className="partner-card-header">
                  <div className="partner-logo-placeholder">
                    <span className="partner-initial">{partner.name.charAt(0)}</span>
                    <span className="partner-name-text">{partner.name}</span>
                  </div>
                </div>
                
                <div className="partner-card-body">
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                </div>
                
                <div className="partner-card-footer">
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="partner-link"
                  >
                    Visit Website
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
                
                <div className="partner-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="become-partner section">
        <div className="container">
          <div className="become-partner-card">
            <div className="become-partner-content">
              <span className="partner-badge">Join Us</span>
              <h2>Become a Corporate Partner</h2>
              <p>
                Partner with Saintly Supplements and help us expand our reach. 
                Together, we can make high-quality supplements accessible to more 
                people who need them most.
              </p>
              
              <div className="partner-benefits">
                <div className="benefit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Tax-deductible contributions</span>
                </div>
                <div className="benefit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Brand visibility on our platforms</span>
                </div>
                <div className="benefit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Impact reports & recognition</span>
                </div>
                <div className="benefit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Employee volunteer opportunities</span>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get in Touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            
            <div className="become-partner-visual">
              <div className="partner-visual-circle">
                <div className="circle-content">
                  <span className="circle-number">3+</span>
                  <span className="circle-label">Active Partners</span>
                </div>
              </div>
              <div className="visual-decorations">
                <div className="decoration dec-1"></div>
                <div className="decoration dec-2"></div>
                <div className="decoration dec-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Partners;

