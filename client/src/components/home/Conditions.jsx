import './Conditions.css';

const Conditions = () => {
  const conditions = [
    {
      id: 1,
      name: 'Neuropathy',
      description: 'Supporting nerve health and reducing discomfort for those with nerve damage.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      color: 'var(--turquoise)',
    },
    {
      id: 2,
      name: 'Back Pain',
      description: 'Providing anti-inflammatory and supportive supplements for spinal health.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M12 2c-2 2-3 4-3 6s1 4 3 6c2-2 3-4 3-6s-1-4-3-6z"/>
          <path d="M12 14c-2 2-3 4-3 6s1 2 3 2c2 0 3 0 3-2s-1-4-3-6z"/>
        </svg>
      ),
      color: 'var(--cornflower-blue)',
    },
    {
      id: 3,
      name: 'Cardiovascular Health',
      description: 'Heart-supporting supplements including omega-3s and CoQ10.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      color: 'var(--cadmium-orange)',
    },
    {
      id: 4,
      name: 'Bone Loss',
      description: 'Calcium, Vitamin D, and K2 to strengthen bones and prevent osteoporosis.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM16 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
          <path d="M9 8h6M12 8v8M8 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
          <path d="M9 16h6"/>
        </svg>
      ),
      color: 'var(--gamboge)',
    },
    {
      id: 5,
      name: 'Vision Problems',
      description: 'Lutein, zeaxanthin, and eye-health vitamins to protect and improve vision.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      color: 'var(--cobalt-blue)',
    },
  ];

  return (
    <section className="conditions section">
      <div className="conditions-bg">
        <div className="conditions-gradient"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Support</span>
          <h2>Conditions We Provide For</h2>
          <p>
            Our mission is to support those struggling with chronic health conditions 
            through targeted, no-cost supplementation.
          </p>
        </div>

        <div className="conditions-grid">
          {conditions.map((condition, index) => (
            <div 
              key={condition.id} 
              className="condition-card"
              style={{ '--card-color': condition.color, '--delay': `${index * 0.1}s` }}
            >
              <div className="condition-icon">
                {condition.icon}
              </div>
              <h3>{condition.name}</h3>
              <p>{condition.description}</p>
              <div className="condition-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;

