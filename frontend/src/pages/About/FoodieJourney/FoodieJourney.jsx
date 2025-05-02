import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./FoodieJourney.css";
import foodieJourney from "../../../assets/foodieJourney.png";

const FoodieJourney = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  useEffect(() => {
    document.title = "Foodie - Blog";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load

    // Trigger image animation after load
    const img = new Image();
    img.src = foodieJourney;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  const handleBackClick = () => {
    window.location.href = "/about"; // Navigate back to About page
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Exploring Culinary Delights: The Foodie Journey",
        text: "Check out this amazing culinary journey with Foodie!",
        url: window.location.href,
      });
    } else {
      alert(
        "Share feature is not supported on this browser. Copy the link to share!"
      );
    }
  };

  return (
    <div className="fj-blog-page-container">
      <header className="fj-blog-header">
        <h1 className="fj-blog-title">
          Exploring Culinary Delights: The Foodie Journey
        </h1>
        <p className="fj-blog-date">October 12, 2024</p>
      </header>

      <main className="fj-blog-content">
        <div
          className={`fj-blog-image-placeholder ${
            isImageLoaded ? "loaded" : ""
          }`}
        >
          <img src={foodieJourney} alt="Culinary Journey" />
        </div>
        <section className="fj-blog-text">
          <p>
            Embark on a culinary adventure with Foodie, where every dish tells a
            story. From vibrant street food markets to Michelin-starred
            kitchens, our journey celebrates the art of food and the cultures
            that inspire it.
          </p>
          <p>
            Our mission is to bring the world’s flavors to your table. Whether
            it’s the spicy tang of Thai som tam or the comforting warmth of
            Italian lasagna, we curate experiences that delight the senses.
          </p>
          <p>
            Foodie has always been about more than just delivering meals—it’s
            about delivering experiences. In this journey, we explore the
            diverse cuisines that have shaped our menu and the stories behind
            them.
          </p>
          <p>
            Each cuisine we feature is a testament to the creativity and passion
            of the chefs we partner with. From the smoky tandoors of India to
            the delicate sushi bars of Japan, we strive to honor the
            authenticity of every dish while making it accessible to all.
          </p>
          <p>
            Our journey also takes us to the heart of local communities, where
            food is a universal language. We’ve discovered hidden gems in
            bustling markets and learned age-old recipes passed down through
            generations, enriching our offerings with every story we uncover.
          </p>
          <p>
            At Foodie, we believe that food has the power to connect people. Our
            curated menus are designed to spark conversations, evoke memories,
            and create new traditions. Whether you’re dining solo or hosting a
            feast, we’re here to make every moment special.
          </p>
          <p>
            Stay tuned as we continue to expand our offerings and bring more
            culinary delights to your doorstep! We’re excited to introduce new
            flavors, seasonal specials, and exclusive collaborations with
            culinary artisans from around the globe.
          </p>
        </section>
        <div className="fj-button-group">
          <button className="fj-back-button" onClick={handleBackClick}>
            <IoArrowBack className="fj-back-icon" /> Back to About
          </button>
          <button className="fj-share-button" onClick={handleShare}>
            Share This Article
          </button>
        </div>
      </main>
    </div>
  );
};

export default FoodieJourney;
