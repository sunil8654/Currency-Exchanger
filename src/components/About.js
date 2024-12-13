import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Us</h1>
        <p>At Currency Exchange, we are dedicated to providing you with the most accurate and up-to-date currency exchange rates to make your transactions seamless and hassle-free.</p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify currency exchange by offering a platform that is fast, reliable, and accessible to everyone. We aim to empower individuals and businesses by providing transparency and trust in currency conversion.
        </p>
      </section>

      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Accuracy:</strong> Real-time exchange rates powered by trusted financial sources.</li>
          <li><strong>User-Friendly:</strong> Simple interface that caters to all levels of users.</li>
          <li><strong>Global Coverage:</strong> Convert currencies from over 150 countries at your fingertips.</li>
          <li><strong>Secure Platform:</strong> Your privacy and data security are our top priorities.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          We are a team of finance enthusiasts and tech experts committed to building a robust platform that simplifies the world of currency exchange.
        </p>
      </section>
    </div>
  );
};

export default About;
