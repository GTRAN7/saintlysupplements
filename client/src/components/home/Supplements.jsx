import './Supplements.css';

const Supplements = () => {
  const supplements = [
    {
      id: 1,
      name: 'Vitamin D3',
      description: 'Essential for bone health, immune function, and mood regulation.',
      benefits: ['Bone strength', 'Immune support', 'Mood balance'],
      image: '/products/vitamin-d3.JPG',
    },
    {
      id: 2,
      name: 'Multivitamin',
      description: 'A comprehensive blend of essential vitamins and minerals for daily health.',
      benefits: ['Overall wellness', 'Immune support', 'Energy levels'],
      image: '/products/multivitamin.JPG',
    },
    {
      id: 3,
      name: 'Fish Oil (Omega-3)',
      description: 'High-quality omega-3 fatty acids for brain and heart health.',
      benefits: ['Brain function', 'Inflammation', 'Joint health'],
      image: '/products/omega3.JPG',
    },
    {
      id: 4,
      name: 'Condition-Specific Blends',
      description: 'Targeted formulas designed for specific health conditions.',
      benefits: ['Customized care', 'Targeted support', 'Quality assured'],
      image: '/products/multivitamin.JPG',
    },
  ];

  return (
    <section className="supplements section">
      <div className="container">
        <div className="supplements-header">
          <div className="supplements-header-content">
            <span className="section-label">What We Provide</span>
            <h2>Essential Supplements</h2>
            <p>
              By offering essential vitamins like D & K, fish oil, and condition-specific 
              blends, we empower individuals to take control of their health regardless of income.
            </p>
          </div>
        </div>

        <div className="supplements-grid">
          {supplements.map((supplement, index) => (
            <div 
              key={supplement.id} 
              className="supplement-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="supplement-image">
                <img src={supplement.image} alt={supplement.name} />
              </div>
              
              <div className="supplement-content">
                <h3>{supplement.name}</h3>
                <p>{supplement.description}</p>
                
                <ul className="supplement-benefits">
                  {supplement.benefits.map((benefit, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="supplements-cta">
          <div className="supplements-cta-content">
            <h3>Need supplements but can't afford them?</h3>
            <p>We're here to help. Apply for assistance today.</p>
          </div>
          <a href="/veterans" className="btn btn-primary">
            Apply for Help
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Supplements;

