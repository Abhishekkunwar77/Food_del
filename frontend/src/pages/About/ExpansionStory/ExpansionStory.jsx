import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./ExpansionStory.css";
import expansionStory from "../../../assets/expansionStory.png";
import { useEffect, useState } from "react";

const ExpansionStory = () => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const img = new Image();
    img.src = expansionStory;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  const handleBackClick = () => {
    navigate("/about");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "From Local to National: Foodie's Expansion Story",
        text: "Discover how Foodie grew from a local service to a national brand!",
        url: window.location.href,
      });
    } else {
      alert("Share feature is not supported. Copy the link to share!");
    }
  };

  return (
    <div className="es-blog-page-container">
      <Helmet>
        <title>Foodie - Blog</title>
      </Helmet>
      <header className="es-blog-header">
        <h1 className="es-blog-title">
          From Local to National: Foodie's Expansion Story
        </h1>
        <p className="es-blog-date">October 5, 2024</p>
      </header>
      <main className="es-blog-content">
        <div
          className={`es-blog-image-placeholder ${
            isImageLoaded ? "loaded" : ""
          }`}
        >
          <img src={expansionStory} alt="Expansion Story" />
        </div>
        <section className="es-blog-text">
          <p>
            Foodie’s journey began in a single neighborhood, driven by a passion
            for connecting people with great food. What started as a local
            delivery service has grown into a national phenomenon, bringing
            culinary delights to cities across the country.
          </p>
          <p>
            Our expansion wasn’t just about scaling operations—it was about
            staying true to our mission. We focused on building strong
            relationships with local restaurants, ensuring that every dish
            delivered carried the same quality and care as it did on day one.
          </p>
          <p>
            The road to national growth came with its share of challenges. From
            navigating complex logistics to adapting to diverse regional tastes,
            every step taught us valuable lessons. We invested in technology to
            streamline deliveries and listened closely to customer feedback to
            refine our offerings.
          </p>
          <p>
            Strategic partnerships played a key role in our success. By
            collaborating with top-tier chefs and innovative food startups, we
            expanded our menu diversity while supporting small businesses. These
            partnerships allowed us to introduce unique flavors to new markets.
          </p>
          <p>
            Our team grew alongside our footprint. We hired local talent in
            every city, ensuring that our operations reflected the communities
            we served. This approach not only created jobs but also fostered a
            sense of ownership and pride in our brand.
          </p>
          <p>
            Sustainability has been a cornerstone of our expansion. We’ve
            implemented eco-friendly packaging and optimized delivery routes to
            reduce our carbon footprint, ensuring that our growth doesn’t come
            at the expense of the planet.
          </p>
          <p>
            Join us as we continue to grow and bring Foodie to every corner of
            the country! With new cities on the horizon and exciting initiatives
            in the works, our story is far from over.
          </p>
        </section>
        <div className="es-button-group">
          <button className="es-back-button" onClick={handleBackClick}>
            <IoArrowBack className="es-back-icon" /> Back to About
          </button>
          <button className="es-share-button" onClick={handleShare}>
            Share This Article
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExpansionStory;
