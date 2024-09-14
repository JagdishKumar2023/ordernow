import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import { useState } from "react";
import FoodDisplay from "../../components/Foodd/FoodDisplay.jsx";

const Home = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
