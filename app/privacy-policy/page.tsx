import Head from 'next/head';
import React from 'react';
import "./style.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | SmartGen Digital</title>
        <meta name="description" content="SmartGen Digital's privacy policy outlining how we collect, use, and protect your data." />
      </Head>

      <section className="privacy-section">
        <div className="privacy-container">
          <h1>🔒 Privacy Policy</h1>
          <p>Effective Date: October 20, 2025</p>

          <h2>1. Introduction</h2>
          <p>
            SmartGen Digital is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li>Personal Information: name, email, phone number, company name</li>
            <li>Technical Data: IP address, browser type, device information</li>
            <li>Usage Data: pages visited, time spent, interactions</li>
            <li>Form Submissions: messages, inquiries, service requests</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to inquiries and provide services</li>
            <li>To improve website performance and user experience</li>
            <li>To send updates, offers, or newsletters (with consent)</li>
            <li>To ensure security and prevent fraud</li>
          </ul>

          <h2>4. Data Sharing & Disclosure</h2>
          <p>
            We do not sell or rent your personal data. We may share information with trusted partners who assist in operating our website, conducting business, or servicing you — provided they agree to keep this information confidential.
          </p>

          <h2>5. Cookies & Tracking Technologies</h2>
          <p>
            Our website uses cookies to enhance user experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>7. Your Rights</h2>
          <ul>
            <li>Access, update, or delete your personal data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request information about data usage</li>
          </ul>

          <h2>8. Third-Party Links</h2>
          <p>
            Our site may contain links to external websites. We are not responsible for the privacy practices or content of those sites.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@smartgen.com">hello@smartgen.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}