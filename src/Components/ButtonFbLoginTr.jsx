import React from "react";
import "../Styles/Components/ButtonFbLoginTr.css";
import { Link } from "react-router-dom";
import fbLogo from "../assets/images/facebookTR.png";

const ButtonFbLoginTr = () => {
  return (
    <Link to="#" className="button-FbLoginTr">
      <img src={fbLogo} alt="Facebook Logo" />
      <span>Log in with Facebook</span>
    </Link>
  );
};

export default ButtonFbLoginTr;
