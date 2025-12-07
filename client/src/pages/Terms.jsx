import './PageStyles.css';

const Terms = () => {
  return (
    <main className="page legal-page">
      <section className="page-hero page-hero-small">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1>Terms of Service</h1>
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
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Saintly Supplements website and services, you agree to be 
              bound by these Terms of Service. If you do not agree to these terms, please do not 
              use our services.
            </p>

            <h2>About Our Organization</h2>
            <p>
              Saintly Supplements is a nonprofit organization dedicated to providing free, high-quality 
              vitamins and supplements to individuals with chronic medical conditions who cannot afford them.
            </p>

            <h2>Eligibility for Services</h2>
            <p>To be eligible for our supplement assistance program, applicants must:</p>
            <ul>
              <li>Have a qualifying chronic medical condition</li>
              <li>Demonstrate financial need</li>
              <li>Provide accurate and truthful information in their application</li>
              <li>Agree to use supplements only for personal use, not for resale</li>
            </ul>
            <p>
              Saintly Supplements reserves the right to verify eligibility and deny or discontinue 
              services at our discretion.
            </p>

            <h2>Supplement Disclaimer</h2>
            <p>
              The supplements provided by Saintly Supplements are not intended to diagnose, treat, 
              cure, or prevent any disease. They are meant to supplement, not replace, any prescribed 
              medications or treatments.
            </p>
            <p>
              <strong>Important:</strong> Always consult with your healthcare provider before starting 
              any new supplement regimen, especially if you have existing health conditions or are 
              taking medications.
            </p>

            <h2>Volunteer Terms</h2>
            <p>Volunteers agree to:</p>
            <ul>
              <li>Provide accurate personal information</li>
              <li>Comply with all organizational policies and procedures</li>
              <li>Maintain confidentiality of recipient information</li>
              <li>Represent Saintly Supplements professionally and respectfully</li>
              <li>Complete any required training or background checks</li>
            </ul>

            <h2>Donations</h2>
            <p>
              Donations to Saintly Supplements are tax-deductible to the extent allowed by law. 
              Donation receipts will be provided for contributions of $25 or more. All donations 
              are final and non-refundable unless made in error.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the 
              property of Saintly Supplements and is protected by copyright and trademark laws. 
              You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2>Website Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Submit false or misleading information</li>
              <li>Use automated systems to access the website without permission</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              Saintly Supplements provides services and supplements on an "as is" basis. We make no 
              warranties, express or implied, regarding the supplements or services provided. To the 
              fullest extent permitted by law, we shall not be liable for any damages arising from 
              the use of our services or supplements.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Saintly Supplements, its officers, directors, 
              employees, and volunteers from any claims, damages, or expenses arising from your use 
              of our services or violation of these terms.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting to the website. Your continued use of our services 
              constitutes acceptance of the modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws 
              of the state in which Saintly Supplements is incorporated, without regard to conflict 
              of law principles.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Saintly Supplements</strong><br />
              Email: legal@saintlysupplements.org<br />
              Address: [Organization Address]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;

