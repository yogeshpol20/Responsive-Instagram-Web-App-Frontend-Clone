import React from "react";
import "../Styles/Pages/OfflinePage.css";
import CloudOffOutlinedIcon from "@mui/icons-material/CloudOffOutlined";
import PageTitle from "../Components/PageTitle";
import logo from '../assets/images/offline-logo.png';

const OfflinePage = () => {
  return (
    <>
      <PageTitle title="Instagram" />
      <article className="centerContainer">

        <div className="appIconContainer">
          <img src={logo} alt="Instagram" />
        </div>

        <div className="errorContainer">
          <div className="offlineIcon">
            <CloudOffOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
          <span className="message">You're offline</span>
        </div>
        
      </article>
    </>
  );
};

export default OfflinePage;
