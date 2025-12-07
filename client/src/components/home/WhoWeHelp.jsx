import './WhoWeHelp.css';

const WhoWeHelp = () => {
  return (
    <section className="who-we-help section">
      <div className="container">
        <div className="who-we-help-grid">
          <div className="who-we-help-content">
            <span className="section-label">Our Purpose</span>
            <h2>Bridging the Health Gap</h2>
            <p className="lead-text">
              We exist to close the health gap by making high-quality supplements 
              accessible for people facing <strong>chronic conditions</strong> and{' '}
              <strong>financial hardship</strong>.
            </p>
            <p>
              Too many people are forced to choose between essential medication 
              and daily necessities. We believe that access to proper nutrition 
              and supplementation shouldn't depend on income.
            </p>
            
            <div className="help-features">
              <div className="help-feature">
                <div className="help-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div>
                  <h4>Compassionate Care</h4>
                  <p>Every individual is treated with dignity and respect</p>
                </div>
              </div>
              
              <div className="help-feature">
                <div className="help-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4>Quality Assured</h4>
                  <p>Only trusted, high-quality supplements are provided</p>
                </div>
              </div>
              
              <div className="help-feature">
                <div className="help-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <div>
                  <h4>No Cost Ever</h4>
                  <p>All supplements are completely free to those in need</p>
                </div>
              </div>
            </div>
          </div>

          <div className="who-we-help-images">
            <div className="image-grid">
              <div className="image-item image-1">
                <img 
                  src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=600&q=80" 
                  alt="Senior citizen receiving help"
                />
              </div>
              <div className="image-item image-2">
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&q=80" 
                  alt="Community members together"
                />
              </div>
              <div className="image-item image-3">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80" 
                  alt="Volunteers working together"
                />
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="stats-overlay">
              <div className="stats-card">
                <div className="stats-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <div>
                  <span className="stats-number">100%</span>
                  <span className="stats-text">Free for Recipients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;

