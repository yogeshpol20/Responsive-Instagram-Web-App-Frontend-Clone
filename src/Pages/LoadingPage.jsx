import React from "react";
import "../Styles/Pages/LoadingPage.css";
import PageTitle from "../Components/PageTitle";

const LoadingPage = () => {
  return (
    <>
      <PageTitle title="Instagram" />

      <article className="loadingPage">

        <div className="lp-instaLogoContainer">
          <img
            src="/loading-logo.png"
            alt="Instagram"
            className="lp-instagramLogo"
          />
        </div>

        <div className="lp-metaLogoContainer">
          <img src="/meta-logo.png" alt="Meta" className="lp-metaLogo" />
        </div>
        
      </article>
    </>
  );
};

export default LoadingPage;
