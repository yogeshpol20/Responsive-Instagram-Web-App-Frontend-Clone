import React, { useContext, useState } from "react";
import "../Styles/Components/ProfileSwitch.css";
import { Link } from "react-router-dom";

import {SwitchLoginFormContext} from '../App';

const ProfileSwitch = ({ src, username, profilename}) => {

  const {setIsSwitchloginForm} = useContext(SwitchLoginFormContext);
  
  const handleSwitch = ()=>{
    setIsSwitchloginForm(true); // Trigger the form visibility
  }
  return (
    <div className="profileSwitch">
      <div className="ps-profileDetails">
        <Link to="/profilepage" className="profileSwitch-link">
          <img src={src} className="ps-profilePhoto" alt="Profile photo" />
        </Link>

        <div className="ps-profileInfo">
          <Link to="/profilepage" className="profileSwitch-link">
            <div className="ps-username">{username}</div>
          </Link>
          <div className="ps-profilename">{profilename}</div>
        </div>
      </div>

      <button
        onClick={handleSwitch}
        type="button"
        className="profileSwitch-button"
      >
        Switch
      </button>
      
    </div>
  );
};

export default ProfileSwitch;
