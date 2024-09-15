/* eslint-disable react/prop-types */
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContextProvider.jsx";
import "./FoodItem.css";
import { useContext, useEffect } from "react";

const FoodItems = ({ id, name, image, description, price }) => {
  const { removeFromCart, addToCart, cartItems } = useContext(StoreContext);

  useEffect(() => {
    // console.log(,);
  }, [cartItems]);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" className="rating-value" />
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">₹ {price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
