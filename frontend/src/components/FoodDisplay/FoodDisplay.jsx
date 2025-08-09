import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list, url } = useContext(StoreContext); // ✅ pull url here

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter(
            (item) =>
              item && (category === "All" || category === item?.category)
          )
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item?._id || index}
              name={item?.name || "No name"}
              description={item?.description || ""}
              price={item?.price ?? "N/A"} // use nullish coalescing for price
              image={item?.image ? `${url}${item.image}` : `${url}/default.jpg`}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
