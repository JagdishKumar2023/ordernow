import { food_list } from "../../assets/assets.js";
import "./FoodDisplay.css";

const FoodDisplay = () => {
  return (
    <div className="food-display" id="food-display">
      <h1 className="food-heading">Top Restaurant Food in Your City</h1>
      <div className="food-display-list">
        {food_list.map((item) => (
          <div key={item._id} className="food-item">
            <div className="food-item-img-container">
              <img
                className="food-item-image"
                src={item.image}
                alt={item.name}
                onError={(e) => (e.target.src = "/images/fallback.jpg")}
              />
            </div>
            <div className="food-item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
