import { Link } from 'react-router-dom';
import './PageStyles.css';

const OurWork = () => {
  const programs = [
    {
      title: 'Neuropathy Support',
      description: 'Providing supplements to support nerve health and reduce discomfort.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
    {
      title: 'Cardiovascular Care',
      description: 'Heart-healthy supplements including omega-3s and CoQ10.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
    {
      title: 'Bone Health',
      description: 'Calcium, Vitamin D, and K2 for stronger bones.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM16 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
          <path d="M9 8h6M12 8v8M8 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
          <path d="M9 16h6"/>
        </svg>
      ),
    },
    {
      title: 'Vision Care',
      description: 'Eye-health vitamins to protect and improve vision.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
    },
  ];

  return (
    <main className="page our-work-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              What We Do
            </span>
            <h1>Our Work</h1>
            <p>
              Dedicated to closing the health gap through targeted supplementation 
              and compassionate community support.
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
          <div className="content-grid">
            <div className="content-text">
              <h2>Our Mission</h2>
              <p className="lead">
                We exist to close the health gap by making high-quality supplements 
                accessible for people facing chronic conditions and financial hardship.
              </p>
              <p>
                Too many people are forced to choose between essential medication 
                and daily necessities. At Saintly Supplements, we believe that 
                access to proper nutrition and supplementation shouldn't depend on income.
              </p>
              <p>
                Through partnerships with leading supplement companies and the dedication 
                of our volunteers, we're able to provide free, condition-specific 
                supplements to those who need them most.
              </p>
            </div>
            <div className="content-image">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" 
                alt="Volunteers at work"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="container">
          <div className="section-header">
            <h2>Our Programs</h2>
            <p>Targeted support for specific health conditions</p>
          </div>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Learn More?</h2>
            <p>Discover how you can be part of our mission to help others.</p>
            <div className="cta-buttons">
              <Link to="/get-involved" className="btn btn-primary">Get Involved</Link>
              <Link to="/donate" className="btn btn-outline">Donate Now</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurWork;

