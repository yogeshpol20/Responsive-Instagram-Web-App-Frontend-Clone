import React from "react";
import "../Styles/Components/GetApp.css";
import { Link } from "react-router-dom";
import appstoreLogo from "../assets/images/appstore.png";
import playstoreLogo from "../assets/images/playstore.png";

const GetApp = () => {
  const appstoreLink = "https://apps.apple.com/us/app/instagram/id389801252";

  const playstorelink =
    "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D0F15BDA5-D9E7-4477-93D1-98A3D30BC059%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge";

  return (
    <div className="getApp-container">
      <div className="container-name">Get the app.</div>
      <div className="app-platform">
        <Link target="_blank" to={appstoreLink} className="appstore applink">
          <img src={appstoreLogo} alt="download on the App Store" />
        </Link>
        <Link target="_blank" to={playstorelink} className="playstore applink">
          <img src={playstoreLogo} alt="Get it on Google Play" />
        </Link>
      </div>
    </div>
  );
};

export default GetApp;
