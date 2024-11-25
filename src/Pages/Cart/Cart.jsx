import { useContext } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, food_list, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  // Filter food_list to only include items in the cart
  const cartItemsList = food_list.filter((item) => cartItems[item._id] > 0);

  return (
    <div className="cart-container-main">
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {cartItemsList.length === 0 ? (
            <p className="cart-empty">Your cart is empty!</p>
          ) : (
            cartItemsList.map((item) => (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cross"
                    role="button"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    ❌
                  </p>
                </div>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹50</p> {/* Example fixed fee */}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() + 50}</b> {/* Include delivery fee */}
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="cart-total-btn"
            disabled={getTotalCartAmount() === 0}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here:</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
