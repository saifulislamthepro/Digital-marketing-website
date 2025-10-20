import Head from 'next/head';
import React from 'react';
import './style.css';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | SmartGen Digital</title>
        <meta name="description" content="SmartGen Digital's terms and conditions outlining service use, responsibilities, and legal agreements." />
      </Head>

      <section className="terms-section">
        <div className="terms-container">
          <h1>📄 Terms & Conditions</h1>
          <p>Effective Date: October 20, 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using SmartGen Digital’s website or services, you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
          </p>

          <h2>2. Services Provided</h2>
          <p>
            SmartGen Digital offers branding, web development, video production, and digital marketing services. All services are subject to availability and may be modified or discontinued at our discretion.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information during onboarding</li>
            <li>Respect intellectual property and usage rights</li>
            <li>Avoid misuse, abuse, or illegal activity through our platforms</li>
          </ul>

          <h2>4. Payment & Refunds</h2>
          <p>
            Payments are due as per agreed milestones or invoices. Refunds are only issued for services not rendered, subject to review. Custom work, once delivered, is non-refundable.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All designs, code, videos, and content created by SmartGen remain our intellectual property until full payment is received. Upon payment, ownership transfers to the client unless otherwise agreed.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            We respect your privacy and confidentiality. Any sensitive business information shared with us will be protected and not disclosed without consent.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            SmartGen Digital is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the service.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate services or access for violations of these terms, misuse, or non-payment. Termination does not waive outstanding obligations.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Bangladesh. Any disputes shall be resolved through arbitration or the courts of Dhaka.
          </p>

          <h2>10. Updates to Terms</h2>
          <p>
            We may update these Terms & Conditions periodically. Continued use of our services after changes implies acceptance of the updated terms.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            For questions regarding these Terms, please contact us at <a href="mailto:hello@smartgen.com">hello@smartgen.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
