import { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContextProvider.jsx";

const FoodItems = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  // console.log(url);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt={name}
        />
        {!cartItems[id] ? (
          <button onClick={() => addToCart(id)}>
            <img
              className="add"
              src={assets.add_icon_white}
              alt={`Add ${name} to cart`}
            />
          </button>
        ) : (
          <div className="food-item-counter">
            <button onClick={() => removeFromCart(id)}>
              <img src={assets.remove_icon_red} />
            </button>
            <p>{cartItems[id]}</p>
            <button onClick={() => addToCart(id)}>
              <img src={assets.add_icon_green} alt={`Add ${name} to cart`} />
            </button>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img
            src={assets.rating_starts}
            alt="Rating"
            className="rating-value"
          />
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">₹ {price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
