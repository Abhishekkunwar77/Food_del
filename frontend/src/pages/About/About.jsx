import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./About.css";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";

import mission from "../../assets/mission.png";

import aboutprofile1 from "../../assets/aboutprofile1.png";
import aboutprofile2 from "../../assets/aboutprofile2.png";
import aboutprofile3 from "../../assets/aboutprofile3.png";

const About = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = "Foodie - About";
  }, []);
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger on route change

  const handleReadMore = (blogSlug) => {
    // Open the corresponding blog page in a new tab
    window.open(`/blog/${blogSlug}`, "_blank");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    // Placeholder for subscription logic (e.g., API call)
    alert(`Subscribed with email: ${email}`);
    e.target.reset();
  };

  return (
    <div className="ab-about-container">
      <header className="ab-about-header">
        <h1 className="ab-header-title">
          Foodie – Satisfy Your Cravings Instantly
        </h1>
        <p className="ab-header-subtitle">
          Your one-stop destination for delicious meals delivered to your door!{" "}
          <br />
          Hungry? Get Foodie—Fast, Fresh & at Your Door!
        </p>
      </header>

      <section className="ab-why-choose-section">
        <h2 className="ab-section-title">Why Choose Foodie?</h2>
        <div className="ab-why-choose-grid">
          <div className="ab-why-choose-item">
            <img
              src={why1}
              alt="Wide Variety Icon"
              className="ab-why-choose-image"
            />
            <h3>Wide Variety</h3>
            <p>From salads to biryanis, we have something for every craving.</p>
          </div>
          <div className="ab-why-choose-item">
            <img
              src={why2}
              alt="Fast Delivery Icon"
              className="ab-why-choose-image"
            />
            <h3>Fast Delivery</h3>
            <p>Get your food delivered hot and fresh in no time.</p>
          </div>
          <div className="ab-why-choose-item">
            <img
              src={why3}
              alt="Quality Guaranteed Icon"
              className="ab-why-choose-image"
            />
            <h3>Quality Guaranteed</h3>
            <p>We partner with top restaurants to ensure the best taste.</p>
          </div>
        </div>
      </section>

      <section className="ab-mission-section">
        <div className="ab-mission-content">
          <div className="ab-mission-image">
            <img
              src={mission}
              alt="Our Mission"
              className="ab-mission-image-content"
            />
          </div>
          <div className="ab-mission-text">
            <h2 className="ab-section-title">Our Mission</h2>
            <p className="ab-section-text">
              At Foodie, we believe food is more than just a meal—it's an
              experience. Our mission is to bring a diverse range of cuisines
              right to your doorstep, ensuring every bite is fresh, flavorful,
              and delivered with love. We are passionate about connecting people
              with the best culinary delights from around the world, fostering a
              sense of community through shared meals. Whether you're craving a
              spicy curry, a comforting pizza, or a healthy salad, we strive to
              make every order a delightful journey. Our team works tirelessly
              to partner with the best local restaurants, ensuring quality and
              authenticity in every dish we deliver. Join us as we continue to
              innovate and bring joy to your dining table, one meal at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="ab-blog-section">
        <h2 className="ab-blog-title">FOODIE BLOG</h2>
        <div className="ab-blog-grid">
          <div className="ab-blog-card">
            <div className="ab-blog-image-placeholder">
              <img src={blog1} alt="Exploring Culinary Delights" />
            </div>
            <div className="ab-blog-content">
              <p className="ab-blog-date">October 12, 2024</p>
              <h3 className="ab-blog-card-title">
                Exploring Culinary Delights: The Foodie Journey
              </h3>
              <button
                className="ab-read-more-button"
                onClick={() => handleReadMore("foodie-journey")}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="ab-blog-card">
            <div className="ab-blog-image-placeholder">
              <img src={blog2} alt="Delivering Happiness" />
            </div>
            <div className="ab-blog-content">
              <p className="ab-blog-date">October 11, 2024</p>
              <h3 className="ab-blog-card-title">
                Delivering Happiness: Foodie's Growth Strategy
              </h3>
              <button
                className="ab-read-more-button"
                onClick={() => handleReadMore("growth-strategy")}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="ab-blog-card">
            <div className="ab-blog-image-placeholder">
              <img src={blog3} alt="From Local to National" />
            </div>
            <div className="ab-blog-content">
              <p className="ab-blog-date">October 5, 2024</p>
              <h3 className="ab-blog-card-title">
                From Local to National: Foodie's Expansion Story
              </h3>
              <button
                className="ab-read-more-button"
                onClick={() => handleReadMore("expansion-story")}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-testimonial-section">
        <h2 className="ab-testimonial-title">What Our Customers Say</h2>
        <div className="ab-testimonial-grid">
          <div className="ab-testimonial-card">
            <img
              src={aboutprofile1}
              alt="User 1 Profile"
              className="ab-testimonial-profile-pic"
            />
            <div className="ab-testimonial-content">
              <h3 className="ab-testimonial-name">Arjun A.</h3>
              <div className="ab-testimonial-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="ab-testimonial-text">
                "Foodie has transformed my dining experience! The variety of
                cuisines is amazing, and the delivery is always on time." 
              </p>
            </div>
          </div>
          <div className="ab-testimonial-card">
            <img
              src={aboutprofile2}
              alt="User 2 Profile"
              className="ab-testimonial-profile-pic"
            />
            <div className="ab-testimonial-content">
              <h3 className="ab-testimonial-name">Krishna R.</h3>
              <div className="ab-testimonial-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
              </div>
              <p className="ab-testimonial-text">
                "I love how easy it is to order from Foodie. The food is always
                fresh, and the customer service is top-notch. Great job!"
              </p>
            </div>
          </div>
          <div className="ab-testimonial-card">
            <img
              src={aboutprofile3}
              alt="User 3 Profile"
              className="ab-testimonial-profile-pic"
            />
            <div className="ab-testimonial-content">
              <h3 className="ab-testimonial-name">Keshavi K</h3>
              <div className="ab-testimonial-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="ab-testimonial-text">
                "Foodie never disappoints! The quality of food is consistently
                excellent, and I love exploring new dishes through their
                platform."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-subscription-section">
        <h2 className="ab-subscription-title">Subscribe to Our Newsletter</h2>
        <p className="ab-subscription-text">
          Stay updated with the latest Foodie news, exclusive offers, and
          delicious recipes!
        </p>
        <div className="ab-subscription-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="ab-subscription-input"
            required
          />
          <button
            type="submit"
            className="ab-subscription-button"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </section>

      <section className="ab-get-in-touch-section">
        <h2 className="ab-get-in-touch-title">GET IN TOUCH WITH US</h2>
        <div className="ab-get-in-touch-content">
          <div className="ab-contact-info">
            <h3>Head Office:</h3>
            <p>
              Foodie.
              <br />
              No. 555, 23rd Block, Foodie Tech Park
              <br />
              Outer Ring Road, Coimbatore - 641202
            </p>
            <h3>For Help & Support:</h3>
            <p>
              Email: <a href="mailto:support@foodie.in">support@foodie.in</a>
            </p>
          </div>
          <div className="ab-map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226820.71397643728!2d76.802422260794!3d11.013924447326762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1746146004733!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
