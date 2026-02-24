import './PageStyles.css';

const VeteranPolicy = () => {
  return (
    <main className="page legal-page">
      <section className="page-hero page-hero-small">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1>Veteran Program Privacy &amp; Document Retention Policy</h1>
            <p>Last updated: February 2026</p>
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

            <h2>1. Purpose</h2>
            <p>
              This Privacy and Document Retention Policy ("Policy") describes how Saintly Supplements
              ("we," "our," or "us") collects, uses, protects, retains, and disposes of personal
              information and documentation submitted by applicants to the Veteran Supplement Assistance
              Program ("Program"). Our goal is to safeguard veteran privacy while fulfilling our mission
              to provide free dietary supplements to U.S. military veterans experiencing financial hardship.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              To determine eligibility for the Program, we collect the following categories of information:
            </p>
            <h3>Identity &amp; Military Service</h3>
            <ul>
              <li>Full legal name and date of birth</li>
              <li>Government-issued photo identification (e.g., driver's license, state ID)</li>
              <li>DD-214 or equivalent Certificate of Release or Discharge from Active Duty</li>
              <li>VA card or other proof of veteran status (if applicable)</li>
            </ul>
            <h3>Financial Information</h3>
            <ul>
              <li>Proof of financial hardship (e.g., recent tax return, benefit award letter, pay stubs)</li>
              <li>Household income documentation as requested on the application form</li>
            </ul>
            <h3>Contact &amp; Delivery Information</h3>
            <ul>
              <li>Mailing address for supplement delivery</li>
              <li>Phone number and/or email address for program communications</li>
            </ul>
            <h3>Health Preferences</h3>
            <ul>
              <li>Supplement preferences or health needs as voluntarily disclosed on the application</li>
              <li>Known allergies or dietary restrictions relevant to supplement selection</li>
            </ul>

            <h2>3. Use of Information</h2>
            <p>We use the information we collect solely for the following purposes:</p>
            <ul>
              <li>Verifying eligibility for the Veteran Supplement Assistance Program</li>
              <li>Processing and fulfilling approved supplement requests</li>
              <li>Communicating with applicants about application status and program updates</li>
              <li>Maintaining accurate program records and compliance documentation</li>
              <li>Preventing fraud and ensuring program integrity</li>
              <li>Aggregate, de-identified reporting on program reach and impact (no personal data shared)</li>
            </ul>
            <p>
              We will not use your information for marketing, fundraising solicitations, or any purpose
              unrelated to administering the Program without your explicit consent.
            </p>

            <h2>4. Access Controls</h2>
            <p>
              Access to applicant information is strictly limited to authorized Saintly Supplements staff
              and volunteers who require access to perform their program duties. Specifically:
            </p>
            <ul>
              <li>Only designated Program Coordinators may review eligibility documents</li>
              <li>Access is granted on a need-to-know basis and revoked upon role change or departure</li>
              <li>All personnel with access are required to acknowledge confidentiality obligations</li>
              <li>Application data stored in Google Forms/Sheets is restricted via Google Workspace
                  permissions; sharing links are disabled and access is limited to named administrators</li>
              <li>Printed documents (if any) are stored in locked cabinets accessible only to
                  authorized coordinators</li>
            </ul>

            <h2>5. Data Storage &amp; Security</h2>
            <p>
              Applicant data is collected through a Google Form and stored in a corresponding Google
              Sheet, both of which are hosted on Saintly Supplements' Google Workspace account. We
              implement the following security measures:
            </p>
            <ul>
              <li>Two-factor authentication (2FA) required for all administrator accounts</li>
              <li>Google Workspace data encryption at rest and in transit</li>
              <li>Periodic access reviews to remove inactive or unauthorized users</li>
              <li>No applicant data is transferred to third-party systems without necessity</li>
              <li>Shipping partners receive only the name and mailing address needed for delivery;
                  no other personal or financial information is shared</li>
            </ul>
            <p>
              While we implement these protections, no digital system is 100% secure. In the event
              of a data breach that affects your personal information, we will notify affected
              individuals as required by applicable law.
            </p>

            <h2>6. Document Retention Periods</h2>
            <p>
              We retain applicant documents and records only as long as necessary to fulfill program
              purposes and meet legal obligations:
            </p>
            <ul>
              <li>
                <strong>Active applicant records</strong> — Retained for the duration of the
                applicant's enrollment in the Program plus one (1) year after last supplement shipment.
              </li>
              <li>
                <strong>Denied or ineligible applications</strong> — Retained for ninety (90) days
                from the date of denial to allow for appeal or reapplication, then securely deleted.
              </li>
              <li>
                <strong>Financial hardship documentation</strong> — Retained for three (3) years to
                support audit and compliance requirements, then securely deleted.
              </li>
              <li>
                <strong>DD-214 and military discharge records</strong> — Retained for the duration
                of active enrollment plus one (1) year; copies are deleted upon secure disposal
                of the applicant file.
              </li>
              <li>
                <strong>Aggregate program statistics</strong> (de-identified) — Retained indefinitely
                for reporting and grant compliance.
              </li>
            </ul>

            <h2>7. Secure Disposal</h2>
            <p>
              When retention periods expire, applicant records are disposed of securely:
            </p>
            <ul>
              <li>Digital records are permanently deleted from Google Sheets and any associated storage,
                  including Trash/Bin folders</li>
              <li>Uploaded document files (e.g., DD-214 scans) are deleted from Google Drive and
                  cannot be recovered</li>
              <li>Physical documents, if any, are cross-cut shredded or destroyed by a certified
                  document destruction service</li>
              <li>Disposal actions are logged by the Program Coordinator for compliance purposes</li>
            </ul>

            <h2>8. Applicant Rights</h2>
            <p>
              As a program applicant, you have the following rights regarding your personal information:
            </p>
            <ul>
              <li>
                <strong>Right to Access</strong> — You may request a copy of the personal information
                we hold about you.
              </li>
              <li>
                <strong>Right to Correction</strong> — You may request that we correct inaccurate or
                incomplete information in your application record.
              </li>
              <li>
                <strong>Right to Deletion</strong> — You may request deletion of your records. Note
                that deletion may affect your eligibility for current or future program cycles.
              </li>
              <li>
                <strong>Right to Withdraw</strong> — You may withdraw your application at any time.
                Records will be deleted within thirty (30) days of withdrawal request unless retention
                is required by law.
              </li>
              <li>
                <strong>Right to Complain</strong> — If you believe your privacy rights have been
                violated, you may contact us directly or file a complaint with the appropriate
                regulatory authority.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <strong>privacy@saintlysupplements.org</strong>. We will respond within thirty (30)
              business days.
            </p>

            <h2>9. Policy Updates</h2>
            <p>
              We may update this Policy from time to time to reflect changes in our practices, program
              structure, or legal requirements. When we make material changes, we will update the
              "Last updated" date at the top of this page. Continued participation in the Program
              following notice of changes constitutes acceptance of the updated Policy.
            </p>
            <p>
              For questions about this Policy or the Veteran Supplement Assistance Program, please contact:
            </p>
            <p>
              <strong>Saintly Supplements — Veteran Program Office</strong><br />
              Email: privacy@saintlysupplements.org<br />
              Website: saintlysupplements.org/veterans
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default VeteranPolicy;
