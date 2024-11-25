import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (currState === "Login") {
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        setLoginSuccess(true);
        setShowLogin(false); // Close the login popup
        setErrorMessage(""); // Clear any previous error message
        setData({ name: "", email: "", password: "" }); // Clear the input fields
      } else {
        setErrorMessage("Invalid email or password!"); // Show error if login fails
        setLoginSuccess(false); // Reset login success state
      }
    } else {
      if (users.some((user) => user.email === data.email)) {
        setErrorMessage("Email already registered!"); // Prevent duplicate emails
      } else {
        const newUser = {
          name: data.name,
          email: data.email,
          password: data.password,
        };
        users.push(newUser); // Add new user to the array
        localStorage.setItem("users", JSON.stringify(users)); // Save updated array to localStorage
        setLoginSuccess(true); // Sign-up successful
        setShowLogin(false); // Close the login popup
        setErrorMessage(""); // Clear error message
        setData({ name: "", email: "", password: "" }); // Clear the input fields
      }
    }
  };

  return (
    <div>
      <form onSubmit={onLogin} className="login-popup">
        <div className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="Close"
            />
          </div>

          {loginSuccess && (
            <div className="success-message">Login Successful!</div>
          )}

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <div className="login-popup-inputs">
            {currState === "Sign Up" && (
              <input
                type="text"
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                placeholder="Your name"
                required
              />
            )}
            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              placeholder="Your email"
              required
            />
            <input
              type="password"
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              placeholder="Enter Password"
              required
            />
          </div>

          <button type="submit" className="loginbtn">
            {currState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
