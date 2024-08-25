import React, { useEffect, useState } from "react";
import "../Styles/Components/LogOutModal.css";
import { Link, useNavigate } from "react-router-dom";


const LogOutModal = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/"); // navigate to the auth page after timeout.
      }, 1100);

      return () => clearTimeout(timer); // Cleanup the timer
    }, [navigate]);

  return (
    <article className="logOutModal">
      <div className="logOutModal-container">

        <div className="logOutModal-info">
          <h2 className="logOutModal-heading">Logging out</h2>
          <p className="logOutModal-message">You need to log back in.</p>
        </div>

        <Link to="/login" className="logOutModal-link">
          Log In
        </Link>
      </div>
    </article>
  );
};

export default LogOutModal;