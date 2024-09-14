import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Anything ordered is a menu item. In restaurants, food and drinks are
        menu items. In retail stores, shirts and hats are also considered menu
        items. Therefore, any item being sold is a menu item. Menu item
        configuration consists of a group of components that are assembled to
        make the menu item function as needed.
      </p>
      <div className="slideImagesInfinity">
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.menu_image} alt="" />
                <p className="text-name">{item.menu_name} </p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
