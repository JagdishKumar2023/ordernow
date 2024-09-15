import { food_list } from "../../assets/assets";
// import cartItems from "../../components/FoodItems/FoodItems.jsx";

const Cart = () => {
  return (
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
        return (
          <div key={index} className="cart-items-title  cart-item-item">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            {/* <p>{cartItems[item._id]}</p> */}
            <p>{item.price}</p>
            <p>X</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
