import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./GrowthStrategy.css";
import growthStratery from "../../../assets/growthStrategy.png";

const GrowthStrategy = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load

    // Trigger image animation after load
    const img = new Image();
    img.src = growthStratery;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  const handleBackClick = () => {
    window.location.href = "/about"; // Navigate back to About page
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Delivering Happiness: Foodie's Growth Strategy",
        text: "Learn how Foodie's growth strategy is delivering happiness nationwide!",
        url: window.location.href,
      });
    } else {
      alert(
        "Share feature is not supported on this browser. Copy the link to share!"
      );
    }
  };

  return (
    <div className="gs-blog-page-container">
      <header className="gs-blog-header">
        <h1 className="gs-blog-title">
          Delivering Happiness: Foodie's Growth Strategy
        </h1>
        <p className="gs-blog-date">October 11, 2024</p>
      </header>

      <main className="gs-blog-content">
        <div
          className={`gs-blog-image-placeholder ${
            isImageLoaded ? "loaded" : ""
          }`}
        >
          <img src={growthStratery} alt="Growth Strategy" />
        </div>
        <section className="gs-blog-text">
          <p>
            At Foodie, our growth strategy is built on a simple yet powerful
            mission: delivering happiness through every meal. From our humble
            beginnings as a local delivery service, we’ve scaled to become a
            national brand, fueled by customer satisfaction and innovation.
          </p>
          <p>
            Our approach centers on operational excellence. We’ve invested
            heavily in technology to ensure seamless ordering and lightning-fast
            deliveries, allowing us to maintain the same level of care and
            quality as we expand into new markets.
          </p>
          <p>
            Partnerships with local restaurants have been a cornerstone of our
            success. By collaborating with culinary talents across the country,
            we’ve curated diverse menus that cater to every palate, from comfort
            food classics to bold, global flavors.
          </p>
          <p>
            Customer feedback drives our growth. We actively listen to our
            community, using insights to refine our services and introduce
            features like real-time tracking and personalized recommendations.
            This customer-first mindset has helped us achieve a 10x growth in
            the past year.
          </p>
          <p>
            Scaling sustainably is a priority. We’ve adopted eco-conscious
            practices, such as biodegradable packaging and optimized delivery
            routes, to minimize our environmental impact while reaching more
            customers.
          </p>
          <p>
            Our team is the heart of our growth. By fostering a culture of
            creativity and empowerment, we’ve built a workforce that’s
            passionate about our mission. From delivery drivers to tech
            developers, every member of the Foodie family plays a vital role in
            our success.
          </p>
          <p>
            We’re excited about the future and committed to delivering happiness
            with every meal! With plans to enter new cities and launch
            innovative services, Foodie’s growth story is just beginning.
          </p>
        </section>
        <div className="gs-button-group">
          <button className="gs-back-button" onClick={handleBackClick}>
            <IoArrowBack className="gs-back-icon" /> Back to About
          </button>
          <button className="gs-share-button" onClick={handleShare}>
            Share This Article
          </button>
        </div>
      </main>
    </div>
  );
};

export default GrowthStrategy;
