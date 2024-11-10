import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <img src="/images/image3.jpg" alt="Laptop for eCommerce" />
        </div>

        {/* Text Content Section */}
        <div className="about-text">
          <h2>About Our E-Commerce Platform</h2>
          <p>
            Welcome to our eCommerce platform, a marketplace built with a mission to bring quality products
            right to your fingertips. We aim to offer a seamless shopping experience with the best quality products,
            unmatched convenience, and customer satisfaction.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to make online shopping easy, efficient, and enjoyable. We believe in providing a platform
            that meets the needs of all customers, offering a wide selection of products with quality assurance.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>
              <strong>Quality Assurance:</strong> We prioritize quality, ensuring that each product meets our high standards
              so you can shop with confidence.
            </li>
            <li>
              <strong>Convenience:</strong> Our platform offers a user-friendly experience, allowing you to shop whenever and wherever
              you want. With a few clicks, get your desired products delivered right to your doorstep.
            </li>
            <li>
              <strong>Exceptional Customer Service:</strong> We take pride in our dedicated customer support team, always ready to assist
              you with any questions or concerns you may have.
            </li>
          </ul>
        </div>
      </div>

  
    </div>
  );
};

export default AboutPage;
