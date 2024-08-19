import React from "react";
import "../Styles/Components/ButtonFbLoginTr.css";
import { Link } from "react-router-dom";

const ButtonFbLoginTr = () => {
  return (
    <Link to="#" className="button-FbLoginTr">
      <img src="/facebookTr.png" alt="Facebook Logo" />
      <span>Log in with Facebook</span>
    </Link>
  );
};

export default ButtonFbLoginTr;
