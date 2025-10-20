import Head from 'next/head';
import React from 'react';
import './style.css';

export default function SalesSupport() {
  return (
    <>
      <Head>
        <title>Sales Support | SmartGen Digital</title>
        <meta name="description" content="Get expert sales support from SmartGen Digital. We help you choose the right package, answer questions, and guide your onboarding." />
      </Head>

      <section className="sales-section">
        <div className="sales-container">
          <h1>🤝 Sales Support</h1>
          <p>Need help choosing the right package or understanding our services? Our sales team is here to guide you every step of the way.</p>

          <h2>1. What We Help With</h2>
          <ul>
            <li>Explaining package features and pricing</li>
            <li>Customizing services for your business needs</li>
            <li>Providing timelines and deliverables</li>
            <li>Answering pre-sales questions and onboarding guidance</li>
          </ul>

          <h2>2. How to Reach Us</h2>
          <p>
            You can contact our sales team via:
            <ul>
              <li>Email: <a href="mailto:sales@smartgen.com">sales@smartgen.com</a></li>
              <li>Phone: <a href="tel:+8801234567890">+880 123-456-7890</a></li>
              <li>WhatsApp: <a href="https://wa.me/8801234567890" target="_blank">Chat Now</a></li>
            </ul>
          </p>

          <h2>3. Response Time</h2>
          <p>
            We typically respond within 24 hours on business days. For urgent inquiries, please call or use WhatsApp for faster support.
          </p>

          <h2>4. Custom Quotes & Consultations</h2>
          <p>
            If you need a custom quote or want to discuss a tailored solution, we offer free 30-minute consultations. Just reach out and we’ll schedule a time.
          </p>

          <h2>5. Ready to Get Started?</h2>
          <p>
            Visit our <a href="/startup-package">Startup Package</a> page or <a href="/contact">Contact Us</a> to begin your journey with SmartGen Digital.
          </p>
        </div>
      </section>
    </>
  );
}