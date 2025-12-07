import './PageStyles.css';

const Privacy = () => {
  return (
    <main className="page legal-page">
      <section className="page-hero page-hero-small">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1>Privacy Policy</h1>
            <p>Last updated: December 2024</p>
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
          <div className="legal-content">
            <h2>Introduction</h2>
            <p>
              Saintly Supplements ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for our programs or services</li>
              <li>Sign up as a volunteer</li>
              <li>Make a donation</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us with inquiries</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, mailing address, 
              and any other information you choose to provide.
            </p>

            <h3>Health Information</h3>
            <p>
              If you apply for supplement assistance, we may collect health-related information 
              necessary to determine eligibility and provide appropriate supplements. This information 
              is handled with the utmost care and confidentiality.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process supplement requests and deliver products</li>
              <li>Communicate with you about our programs and services</li>
              <li>Process donations and provide tax receipts</li>
              <li>Coordinate volunteer activities</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as necessary to:
            </p>
            <ul>
              <li>Fulfill our services (e.g., shipping partners for supplement delivery)</li>
              <li>Comply with legal requirements</li>
              <li>Protect our rights and safety</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to 
              disable cookies through your browser settings, though this may affect some website functionality.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected such 
              information, please contact us immediately.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              <strong>Saintly Supplements</strong><br />
              Email: privacy@saintlysupplements.org<br />
              Address: [Organization Address]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;

