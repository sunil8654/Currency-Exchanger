import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Currency Exchange</h1>
          <p>Your one-stop destination for real-time currency conversion and exchange rates.</p>
          <Link to="/currencyConverter" className="hero-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Real-Time Rates</h3>
            <p>Stay updated with the latest and most accurate currency exchange rates.</p>
          </div>
          <div className="feature">
            <h3>Easy to Use</h3>
            <p>Our user-friendly interface makes currency conversion quick and simple.</p>
          </div>
          <div className="feature">
            <h3>Global Reach</h3>
            <p>Convert currencies from over 150 countries worldwide.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <blockquote>
            "Currency Exchange made my travel planning so much easier!" - Sarah J.
          </blockquote>
          <blockquote>
            "I love the real-time updates and the simple interface. Highly recommend!" - Mark T.
          </blockquote>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <Link to="/currencyConverter" className="cta-button">
          Convert Now
        </Link>
      </section>
    </div>
  );
};

export default Home;