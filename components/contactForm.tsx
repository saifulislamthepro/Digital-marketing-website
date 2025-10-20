'use client';
import Head from 'next/head';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
    
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    number: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      number: form.number,
      message: form.message
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '', number:'' });
      })
      .catch(error => {
        console.error('EmailJS error:', error);
        alert('❌ Failed to send message. Please try again.');
      });
  };


  return (
    <form onSubmit={handleSubmit} className="contact-form">
          <p>Give your contact details so we can contact You</p>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="number">Phone Number</label>
              <input
                id="number"
                name="number"
                value={form.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
        <button type="submit" className="btn-orange">Send</button>
    </form>

  )
}