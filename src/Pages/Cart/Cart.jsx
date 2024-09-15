import { useContext } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
import { food_list } from "../../assets/assets";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart-container-main">
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantiy</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-title  cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    ❌
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
        </div>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{0}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{0}</b>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT </button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button className="cart-total-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
