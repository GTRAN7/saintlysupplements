import { Link } from 'react-router-dom';
import './PageStyles.css';
import './VeteranProgram.css';

const supplements = [
  {
    name: 'Omega-3 Fish Oil',
    description: 'Supports cardiovascular health, joint function, and cognitive wellness.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    name: 'Vitamin D3',
    description: 'Essential for bone density, immune function, and mood regulation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
  {
    name: 'Daily Multivitamin',
    description: 'Comprehensive nutritional support with essential vitamins and minerals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
  },
  {
    name: 'Neuropathy Support',
    description: 'Targeted formula to help manage nerve discomfort and peripheral neuropathy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 8v4l3 3"/>
        <path d="M18 2l4 4-4 4"/>
        <path d="M22 6h-8"/>
      </svg>
    ),
  },
  {
    name: 'Wound Healing Complex',
    description: 'Zinc, Vitamin C, and collagen support to accelerate tissue repair.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    name: 'Other / Custom Needs',
    description: 'Have a specific supplement need? Tell us in your application and we\'ll do our best.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'Who is eligible for this program?',
    answer:
      'U.S. military veterans from any branch (Army, Navy, Marine Corps, Air Force, Space Force, or Coast Guard) who have been honorably or generally discharged and are experiencing financial hardship are eligible to apply. Applicants must be U.S. residents.',
  },
  {
    question: 'What documents do I need to provide?',
    answer:
      'You will need to upload a copy of your DD-214 (Certificate of Release or Discharge from Active Duty), a government-issued photo ID, and proof of financial hardship such as a recent tax return, SSI/SSDI award letter, or pay stubs. A VA card is helpful but not required.',
  },
  {
    question: 'How long does the review process take?',
    answer:
      'We aim to review all applications within 5–10 business days of receiving complete documentation. You will be notified by email once a decision is made. Incomplete applications may require follow-up and could take longer.',
  },
  {
    question: 'How will my supplements be delivered?',
    answer:
      'Approved supplements are shipped directly to the mailing address provided on your application at no cost to you. Most shipments arrive within 7–10 business days of approval. We currently ship to all 50 U.S. states and territories.',
  },
  {
    question: 'Can I apply on behalf of a family member?',
    answer:
      'Applications must be submitted by the veteran directly or by an authorized legal representative (such as a power of attorney). If you are applying on behalf of a veteran, please note this in your application and include documentation of your authorization.',
  },
  {
    question: 'Is my personal information kept confidential?',
    answer:
      'Yes. All information you submit is handled according to our Veteran Program Privacy & Document Retention Policy. Your data is only accessible to authorized program staff, is never sold or shared with marketers, and is securely deleted when it is no longer needed.',
  },
  {
    question: 'How often can I reapply or renew my benefits?',
    answer:
      'Approved veterans may renew their program enrollment every six months by completing a brief renewal form. Continued eligibility is subject to ongoing financial hardship and program availability.',
  },
  {
    question: 'What if I don\'t qualify or my application is denied?',
    answer:
      'If your application is denied, you will receive an explanation by email. You may appeal the decision within 30 days by providing additional documentation. We also encourage veterans who do not qualify for this program to explore VA benefits, local food banks, and other community resources.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Apply Online',
    description: 'Complete the short application form with your basic information and supplement preferences.',
  },
  {
    number: '2',
    title: 'Upload Documents',
    description: 'Securely submit your DD-214, photo ID, and proof of financial hardship.',
  },
  {
    number: '3',
    title: 'We Review',
    description: 'Our team reviews your application within 5–10 business days and contacts you with a decision.',
  },
  {
    number: '4',
    title: 'Receive Supplements',
    description: 'Approved applicants receive their supplements shipped free of charge directly to their door.',
  },
];

const VeteranProgram = () => {
  return (
    <main className="page veteran-program-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L3 7l1.5 9L12 22l7.5-6L21 7z"/>
                <path d="M12 2v20"/>
                <path d="M3 7l9 5 9-5"/>
              </svg>
              Veteran Supplement Assistance Program
            </span>
            <h1>Free Supplements for Veterans Who Served</h1>
            <p>
              Saintly Supplements honors the sacrifice of U.S. military veterans by providing
              free dietary supplements to those experiencing financial hardship. No cost. No hassle.
              Just support for the people who gave so much.
            </p>
            <div className="hero-actions">
              <a href="https://docs.google.com/forms/d/1VFj7OtShNwKQnuXZmOZJdCAQMwtwcGSjjgwPPf8HEdE/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply Now — It's Free</a>
              <a href="#how-it-works" className="btn btn-outline-light">See How It Works</a>
            </div>
          </div>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C320,100 640,0 960,60 C1280,120 1440,40 1440,40 L1440,120 L0,120 Z" fill="var(--soft-white)"/>
          </svg>
        </div>
      </section>

      {/* ── Eligibility ── */}
      <section className="section" id="eligibility">
        <div className="container">
          <div className="section-header">
            <h2>Eligibility &amp; Requirements</h2>
            <p>We want to get supplements to the veterans who need them most.</p>
          </div>
          <div className="eligibility-grid">
            <div className="eligibility-card">
              <div className="eligibility-card-header">
                <div className="elig-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Who Qualifies</h3>
              </div>
              <ul className="elig-list">
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  U.S. military veteran (any branch)
                </li>
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Honorable or general discharge
                </li>
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Experiencing financial hardship
                </li>
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Current U.S. resident
                </li>
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  18 years of age or older
                </li>
              </ul>
            </div>

            <div className="eligibility-card">
              <div className="eligibility-card-header">
                <div className="elig-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h3>Required Documents</h3>
              </div>
              <ul className="elig-list">
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  DD-214 discharge certificate
                </li>
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Government-issued photo ID
                </li>
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Proof of financial hardship (tax return, benefit letter, or pay stubs)
                </li>
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  VA card (helpful but not required)
                </li>
                <li>
                  <span className="elig-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Mailing address for delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section bg-warm" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Four simple steps from application to delivery — we make it easy.</p>
          </div>
          <div className="steps-row">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-connector" aria-hidden="true"></div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Available Supplements ── */}
      <section className="section" id="supplements">
        <div className="container">
          <div className="section-header">
            <h2>Available Supplements</h2>
            <p>
              Tell us what you need on your application. We'll do our best to match you
              with the right supplements for your health goals.
            </p>
          </div>
          <div className="supplements-grid">
            {supplements.map((supp, index) => (
              <div key={index} className="supplement-card">
                <div className="supplement-icon">{supp.icon}</div>
                <h4>{supp.name}</h4>
                <p>{supp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-warm" id="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Have questions? We've got answers. Click any question to expand.</p>
          </div>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">
                  <span>{faq.question}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" id="apply">
        <div className="container">
          <div className="cta-box">
            <span className="page-badge" style={{ marginBottom: '1.5rem' }}>
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L3 7l1.5 9L12 22l7.5-6L21 7z"/>
              </svg>
              Ready to Apply?
            </span>
            <h2>Get Your Free Supplements Today</h2>
            <p>
              The application takes less than 10 minutes. There is no cost, no subscription,
              and no strings attached — just our commitment to supporting veterans in need.
            </p>
            <div className="cta-buttons">
              <a href="https://docs.google.com/forms/d/1VFj7OtShNwKQnuXZmOZJdCAQMwtwcGSjjgwPPf8HEdE/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Apply Now — It's Free
              </a>
              <Link to="/veteran-policy" className="btn btn-outline-light">
                View Privacy Policy
              </Link>
            </div>
            <p className="cta-disclaimer">
              By applying, you agree to our{' '}
              <Link to="/veteran-policy" className="cta-policy-link">
                Veteran Program Privacy &amp; Document Retention Policy
              </Link>.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default VeteranProgram;
