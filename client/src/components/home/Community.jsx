import { Link } from 'react-router-dom';
import './Community.css';

const Community = () => {
  const stats = [
    { 
      number: '10,000+', 
      label: 'Supplements Delivered', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.5 20.5L3 13c-1.4-1.4-1.4-3.6 0-5s3.6-1.4 5 0l2.5 2.5L18 3"/>
          <circle cx="17" cy="17" r="5"/>
        </svg>
      )
    },
    { 
      number: '500+', 
      label: 'Active Volunteers', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    { 
      number: '5,000+', 
      label: 'Lives Impacted', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )
    },
    { 
      number: '50+', 
      label: 'Youth Volunteers', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    },
  ];

  return (
    <section className="community section">
      <div className="community-bg">
        <div className="community-pattern"></div>
      </div>

      <div className="container">
        <div className="community-grid">
          <div className="community-content">
            <span className="section-label">Our Community</span>
            <h2>Kindness in Action</h2>
            <p className="community-lead">
              We believe in the power of community, which is why we involve 
              passionate volunteers and young people who help pack, deliver, 
              and share time with those we serve—turning kindness into action.
            </p>

            <div className="community-features">
              <div className="community-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h4>Volunteer-Driven</h4>
                  <p>Our network of dedicated volunteers makes it all possible</p>
                </div>
              </div>

              <div className="community-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <h4>Youth Engagement</h4>
                  <p>Young people learn service while making a real difference</p>
                </div>
              </div>

              <div className="community-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div>
                  <h4>Personal Connection</h4>
                  <p>Building relationships that go beyond supplement delivery</p>
                </div>
              </div>
            </div>

            <Link to="/get-involved" className="btn btn-secondary">
              Join Our Community
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="community-visual">
            <div className="community-image-stack">
              <div className="stack-image stack-image-1">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" 
                  alt="Volunteers packing supplements"
                />
              </div>
              <div className="stack-image stack-image-2">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80" 
                  alt="Youth volunteers"
                />
              </div>
              <div className="stack-image stack-image-3">
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&q=80" 
                  alt="Community gathering"
                />
              </div>
            </div>

            {/* Stats cards */}
            <div className="community-stats">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="community-stat-card"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className="stat-icon-wrapper">{stat.icon}</span>
                  <span className="stat-value">{stat.number}</span>
                  <span className="stat-name">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

