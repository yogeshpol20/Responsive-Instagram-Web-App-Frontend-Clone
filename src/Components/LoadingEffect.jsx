import React from "react";
import "../Styles/Components/LoadingEffect.css";
import gifLoading from "../assets/images/loading.gif";

const LoadingEffect = () => {
  return (
    <div className="loadingEffect">
      <img src={gifLoading} alt="loadingEffect" />
    </div>
  );
};

export default LoadingEffect;
