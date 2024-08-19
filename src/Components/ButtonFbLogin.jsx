import React from "react";
import "../Styles/Components/ButtonFbLogin.css";
import { Link } from "react-router-dom";

const ButtonFbLogin = () => {
  return (
    <Link to="#" className="button-FbLogin">
      <img src="/facebook.png" alt="Facebook Icon" />
      <span>Log in with Facebook</span>
    </Link>
  );
};

export default ButtonFbLogin;
