import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          <span className="order">ORDER NOW !</span> your favourite Food is
          Ready Now
        </h2>
        <p className="paragrah">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredient and culinary experties. Our mission
          is to satisty your cravings and elvate your dining experience one
          delicious meal at a time{" "}
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
