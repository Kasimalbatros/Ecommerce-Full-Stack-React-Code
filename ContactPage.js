import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            <strong>Address:</strong> 123 eCommerce St., Online City, Webland 45678
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email:</strong> support@example.com
          </p>
        </div>

        {/* Image Section */}
        <div className="contact-image">
          <img src="/images/image3.jpg" alt="Laptop for Contact" />
        </div>
      </div>

      {/* Subscription Section */}
      <div className="subscription-section">
        <h3>Subscribe Now & Get 20% Off</h3>
        <div className="subscription-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
