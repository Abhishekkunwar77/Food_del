import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          From comforting classics to exotic delights—your next meal is just a
          tap away!
        </p>
        <button
          onClick={() => {
            document
              .getElementById("food-display")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
