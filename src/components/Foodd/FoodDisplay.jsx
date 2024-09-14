import FoodItems from "../FoodItems/FoodItems.jsx";
import { food_list } from "../../assets/assets.js";
import "./FoodDisplay.css";

const FoodDisplay = () => {
  return (
    <div className="food-display" id="food-display">
      <h1 className="food-heading">Top Resturent food in your city </h1>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <FoodItems
              key={index}
              image={item.image}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
