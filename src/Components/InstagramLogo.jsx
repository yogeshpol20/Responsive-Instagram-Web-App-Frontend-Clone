import React from "react";
import "../Styles/Components/InstagramLogo.css";
import logo from '../assets/images/logo.png';

const InstagramLogo = () => (
  <div className="instagram-logo">
    <img src={logo} alt="Instagram Logo" />
  </div>
);

export default InstagramLogo;
