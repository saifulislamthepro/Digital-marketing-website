

import Form from '@/components/contactForm';
import './style.css';

export default function Contact() {
  return (
    <>
      <head>
        <title>SmartGen contact | easily contact Digital Marketing Agency in Bangladesh</title>
        <meta 
        name='description'
        content="Contact smartgen from anywhere via Direct email or facebook messenger/ whatsapp"/>
      </head>
      <main className="contact-page">
        <section className="contact-hero">
          <h1>📬 Contact SmartGen</h1>
          <p>We’d love to hear from you. Whether you’re ready to start a project or just exploring, let’s talk.</p>
        </section>

          <div>
            <Form/>
          </div>

          <div className="contact-info">
            <h2>📍 Our Office</h2>
            <p>SmartGen Digital Marketing Agency</p>
            <p>flat: 9/A, H: 137/10, SR plaza, Mazar Road, <br /> Mirpur-01, Dhaka-1216, Bangladesh</p>
            <p>Email: green71email@gmail.com</p>
            <a href="tel:+8801711153960"></a>
            <div className='icon-wrapper'>
              <a href="https://www.facebook.com/smartgendigitalagency" target='blank'><i className='fi fi-brands-facebook'></i></a>
            </div>
          </div>
      </main>
    </>
  );
}