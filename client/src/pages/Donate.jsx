import { useState } from 'react';
import './PageStyles.css';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = [25, 50, 100, 250, 500];

  const impactItems = [
    { amount: 25, impact: '1 month of vitamins for 1 person' },
    { amount: 50, impact: '3 months of supplements for 1 person' },
    { amount: 100, impact: '6 months of complete care for 1 person' },
    { amount: 250, impact: '1 year of supplements for 1 person' },
    { amount: 500, impact: 'Full supplement packages for a family' },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    alert(`Thank you for your donation of $${amount}! Payment processing would be integrated here.`);
  };

  return (
    <main className="page donate-page">
      <section className="page-hero donate-hero">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              Make a Difference
            </span>
            <h1>Donate</h1>
            <p>
              Your generosity helps us provide free supplements to those who need them most.
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
          <div className="donate-grid">
            <div className="donate-form-section">
              <h2>Choose Your Donation</h2>
              <form onSubmit={handleSubmit} className="donate-form">
                <div className="amount-grid">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="custom-amount">
                  <label htmlFor="customAmount">Custom Amount</label>
                  <div className="custom-input-wrapper">
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      id="customAmount"
                      value={customAmount}
                      onChange={handleCustomAmount}
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>
                </div>

                <div className="donation-type">
                  <label className="radio-label">
                    <input type="radio" name="frequency" value="once" defaultChecked />
                    <span className="radio-custom"></span>
                    One-time donation
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="frequency" value="monthly" />
                    <span className="radio-custom"></span>
                    Monthly donation
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-full">
                  Donate ${customAmount || selectedAmount}
                </button>

                <p className="secure-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Secure payment processing
                </p>
              </form>
            </div>

            <div className="impact-section">
              <h2>Your Impact</h2>
              <p className="impact-intro">
                Every dollar you donate goes directly toward providing supplements 
                to people with chronic conditions who can't afford them.
              </p>
              
              <div className="impact-list">
                {impactItems.map((item, index) => (
                  <div key={index} className="impact-item">
                    <span className="impact-amount">${item.amount}</span>
                    <span className="impact-text">{item.impact}</span>
                  </div>
                ))}
              </div>

              <div className="trust-badges">
                <div className="trust-badge">
                  <div className="trust-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>501(c)(3) Nonprofit</span>
                </div>
                <div className="trust-badge">
                  <div className="trust-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Tax Deductible</span>
                </div>
                <div className="trust-badge">
                  <div className="trust-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>100% Goes to Mission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container">
          <div className="other-ways">
            <h2>Other Ways to Give</h2>
            <div className="ways-grid">
              <div className="way-card">
                <div className="way-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3>Donate Supplements</h3>
                <p>Have unopened supplements? We accept product donations.</p>
              </div>
              <div className="way-card">
                <div className="way-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                </div>
                <h3>Corporate Partnership</h3>
                <p>Partner with us for larger impact and brand alignment.</p>
              </div>
              <div className="way-card">
                <div className="way-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <h3>Planned Giving</h3>
                <p>Include us in your estate planning for lasting impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;

