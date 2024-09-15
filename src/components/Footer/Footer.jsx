import { assets } from "../../assets/assets";
import ordernow2 from "../Footer/ordernow2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={ordernow2} alt="" />
          <p>
            Welcome to OrderNow! Were thrilled to serve deliciousness right to
            your door. Explore, order, and enjoy amazing meals in just a few
            clicks!
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-right">
          <h1>ORDERNOW!</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
          <div className="footer-Welcome-text">
            <h1>
              Welcome to
              <br /> <span>Order Now food Zone </span>
              <span>Order Now!</span>
            </h1>
          </div>
        </div>
        <div className="footer-content-left">
          <h2>GET CONTACT TO TEAM</h2>
          <ul>
            <li>+91 9669385741</li>
            <li>contact@ordernow@gaml.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
