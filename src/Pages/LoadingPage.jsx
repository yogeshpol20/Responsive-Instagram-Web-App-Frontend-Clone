import React from "react";
import "../Styles/Pages/LoadingPage.css";
import PageTitle from "../Components/PageTitle";
import loadingLogo from "../assets/images/loading-logo.png";
import metaLogo from "../assets/images/meta-logo.png";

const LoadingPage = () => {
  return (
    <>
      <PageTitle title="Instagram" />

      <article className="loadingPage">

        <div className="lp-instaLogoContainer">
          <img
            src={loadingLogo}
            alt="Instagram"
            className="lp-instagramLogo"
          />
        </div>

        <div className="lp-metaLogoContainer">
          <img src={metaLogo} alt="Meta" className="lp-metaLogo" />
        </div>
        
      </article>
    </>
  );
};

export default LoadingPage;
