import './PageStyles.css';
import './VeteranProgram.css';

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

const FAQ = () => {
  return (
    <main className="page">
      {/* Hero Section - Gives it a dark background like other pages */}
      <section className="page-hero" style={{ minHeight: '300px', paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content" style={{ textAlign: 'center' }}>
            <h1>Frequently Asked Questions</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Have questions? We've got answers. Click any question to expand.
            </p>
          </div>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C320,100 640,0 960,60 C1280,120 1440,40 1440,40 L1440,120 L0,120 Z" fill="var(--soft-white)"/>
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq" style={{ paddingTop: '60px' }}>
        <div className="container">
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
    </main>
  );
};

export default FAQ;