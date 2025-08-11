import React from "react";
import "./Learn.css";
import { FaCheckCircle, FaHome, FaHandshake, FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="lm-container">
      
      {/* Hero Section */}
      <section className="lm-hero">
        <div className="lm-hero-overlay">
          <h1>Your Dream Home is Just a Click Away</h1>
          <p>Verified listings, flexible rent plans, and all the details you need.</p>
          <Link to='/Search'><button className="lm-btn-primary">Browse Homes Now</button></Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="lm-benefits">
        <div className="lm-benefit-card">
          <FaCheckCircle className="lm-icon lm-green" />
          <h3>Verified Listings</h3>
          <p>Every property is checked for accuracy and trustworthiness.</p>
        </div>
        <div className="lm-benefit-card">
          <FaHome className="lm-icon lm-blue" />
          <h3>Flexible Rent</h3>
          <p>Short-term or long-term, we have options for you.</p>
        </div>
        <div className="lm-benefit-card">
          <FaSearchLocation className="lm-icon lm-purple" />
          <h3>Detailed Info</h3>
          <p>Photos, floor plans, amenities, and neighborhood details.</p>
        </div>
        <div className="lm-benefit-card">
          <FaHandshake className="lm-icon lm-orange" />
          <h3>Easy Contact</h3>
          <p>Connect with landlords or agents instantly.</p>
        </div>
      </section>
      {/* How It Works */}
      <section className="lm-how">
        <h2>How It Works</h2>
        <div className="lm-steps">
          <div className="lm-step">1️⃣ Search your preferred location</div>
          <div className="lm-step">2️⃣ Filter by rent, BHK, furnishing type</div>
          <div className="lm-step">3️⃣ Book or contact instantly</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="lm-cta">
        <h2>Start your journey today – find the home you deserve.</h2>
        <Link to='/gallery'><button className="lm-btn-primary">Browse All Listings →</button></Link>
      </section>
    </div>
  );
};

export default Learn;
