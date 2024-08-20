import React from "react";
import "../Styles/Components/ButtonFbLogin.css";
import { Link } from "react-router-dom";
import fbLogo from "../assets/images/facebook.png";

const ButtonFbLogin = () => {
  return (
    <Link to="#" className="button-FbLogin">
      <img src={fbLogo} alt="Facebook Icon" />
      <span>Log in with Facebook</span>
    </Link>
  );
};

export default ButtonFbLogin;
