import { food_list } from "../../assets/assets.js";
import FoodItems from "../FoodItems/FoodItems.jsx";
import "./FoodDisplay.css";

const FoodDisplay = () => {
  return (
    <div className="food-display" id="food-display">
      <h1 className="food-heading">Top Restaurant Food in Your City</h1>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          <FoodItems
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
