import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2> Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter(
            (item) => item && (category === "All" || category === item.category)
          )
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name || "No name"}
              description={item.description || ""}
              price={item?.price || "N/A"}
              image={`${import.meta.env.VITE_API_BASE_URL}${item.image}`}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
