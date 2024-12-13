import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help! Reach out to us for any inquiries or support.</p>
      </section>

      <section className="contact-details">
        <h2>Get in Touch</h2>
        <p>Email: <a href="mailto:contact@currencyexchange.com">contact@currencyexchange.com</a></p>
        <p>Phone: <a href="tel:+917017628656">+91 (701) 762-8656</a></p>
        <p>Address: B-143 Saket New Delhi 110031</p>
      </section>
    </div>
  );
};

export default Contact;
