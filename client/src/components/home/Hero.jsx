import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        {/* Decorative blobs */}
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
        
        {/* Background pattern */}
        <div className="hero-pattern"></div>
      </div>

      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <span>Nonprofit Organization</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up delay-1">
            We are little <span className="highlight">saints</span>.
            <br />
            On a big mission to supplement your{' '}
            <span className="highlight-gradient">health</span>.
          </h1>
          
          <p className="hero-description animate-fade-in-up delay-2">
            We exist to close the health gap by providing high-quality supplements accessible for veterans facing chronic conditions and financial hardship.
          </p>
          
          <div className="hero-cta animate-fade-in-up delay-3">
            <Link to="/our-work" className="btn btn-primary btn-lg">
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/donate" className="btn btn-outline-light btn-lg">
              Donate Now
            </Link>
          </div>
          
          <div className="hero-stats animate-fade-in-up delay-4">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Supplements Delivered</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Volunteers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Lives Impacted</span>
            </div>
          </div>
        </div>

        <div className="hero-image animate-fade-in-up delay-2">
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" 
              alt="Volunteers helping community members"
              loading="eager"
            />
            <div className="hero-image-overlay"></div>
          </div>
          
          {/* Floating cards */}
          <div className="floating-card floating-card-1 animate-float">
            <div className="floating-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.5 20.5L3 13c-1.4-1.4-1.4-3.6 0-5s3.6-1.4 5 0l2.5 2.5L18 3"/>
                <circle cx="17" cy="17" r="5"/>
                <path d="M17 14v6M14 17h6"/>
              </svg>
            </div>
            <div className="floating-text">
              <span>Free Vitamins</span>
              <small>D & K, Fish Oil</small>
            </div>
          </div>
          
          <div className="floating-card floating-card-2 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="floating-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div className="floating-text">
              <span>Community Care</span>
              <small>Together We Heal</small>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,40 C320,100 640,0 960,60 C1280,120 1440,40 1440,40 L1440,120 L0,120 Z" 
            fill="var(--soft-white)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

