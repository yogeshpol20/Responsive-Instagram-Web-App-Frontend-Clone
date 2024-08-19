import React from "react";
import "../Styles/Components/SavePostBanner.css";
import { Link } from "react-router-dom";

const SavePostBanner = () => {
  return (
    <div className="savePostBanner">
      <div className="savePostBanner-message">Your item has been saved.</div>
      <Link to="#" className="savePostBanner-link">
        View your saved posts
      </Link>
    </div>
  );
};

export default SavePostBanner;
