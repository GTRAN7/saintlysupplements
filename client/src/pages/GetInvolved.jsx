import { useState } from 'react';
import './PageStyles.css';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'volunteer',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://formspree.io/f/mlgwzozb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Thank you for your interest! We will be in touch soon.');
      setFormData({ name: '', email: '', phone: '', interest: 'volunteer', message: '' });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  const opportunities = [
    {
      title: 'Volunteer',
      description: 'Help pack and deliver supplements to those in need.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      commitment: '2-4 hours/week',
    },
    {
      title: 'Youth Program',
      description: 'Young people ages 14-18 can join our youth volunteer team.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      commitment: '2-3 hours/week',
    },
    {
      title: 'Event Support',
      description: 'Help with community events and outreach programs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      commitment: 'Flexible',
    },
    {
      title: 'Administrative',
      description: 'Support our office with data entry and communication.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      commitment: '4-6 hours/week',
    },
  ];

  return (
    <main className="page get-involved-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              Join Our Mission
            </span>
            <h1>Get Involved</h1>
            <p>
              There are many ways to make a difference. Find your place in our community.
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
          <div className="section-header">
            <h2>Volunteer Opportunities</h2>
            <p>Choose how you'd like to contribute to our mission</p>
          </div>
          <div className="opportunities-grid">
            {opportunities.map((opp, index) => (
              <div key={index} className="opportunity-card">
                <div className="opportunity-icon">{opp.icon}</div>
                <h3>{opp.title}</h3>
                <p>{opp.description}</p>
                <span className="opportunity-commitment">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {opp.commitment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="container">
          <div className="form-section">
            <div className="form-info">
              <h2>Ready to Help?</h2>
              <p>
                Fill out the form and we'll get back to you within 48 hours 
                to discuss how you can contribute to our mission.
              </p>
              <div className="form-benefits">
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Flexible scheduling</span>
                </div>
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Training provided</span>
                </div>
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Community service hours</span>
                </div>
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Make a real difference</span>
                </div>
              </div>
            </div>
            
            <form className="involvement-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="interest">Area of Interest *</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="volunteer">General Volunteer</option>
                  <option value="youth">Youth Program</option>
                  <option value="events">Event Support</option>
                  <option value="admin">Administrative</option>
                  <option value="recipient">Apply for Supplements</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us a bit about yourself and why you'd like to get involved..."
                />
              </div>
              
              <button type="submit" className="btn btn-primary btn-lg">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;

