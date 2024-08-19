import React, { useContext, useEffect, useRef, useState } from "react";
import "../Styles/Components/SidenavMore.css";
import { Link } from "react-router-dom";
import { BsGearWide } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineSun } from "react-icons/ai";
import { LuActivitySquare } from "react-icons/lu";
import { TbAlertSquare } from "react-icons/tb";
import  {SwitchLoginFormContext} from '../App';

const SidenavMore = ({setMoreOption}) => {

  const {setIsSwitchloginForm} = useContext(SwitchLoginFormContext);

  const containerRef = useRef(null);

   //Logout Functionality
   const logout = () => {
    sessionStorage.removeItem("user");
    window.location.href = '/';
  };

  const handleSwitchAccount = ()=>{
    setIsSwitchloginForm(true);
  }

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setMoreOption(false); //close the sidenav more option.
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidenavMore-container" ref={containerRef}>
      <Link to="#" className="sidenavMore-links">
        <BsGearWide className="sidenavMore-icons" />
        <span className="sidenavMore-options">Settings</span>
      </Link>

      <Link to="#" className="sidenavMore-links">
        <LuActivitySquare className="sidenavMore-icons" />
        <span className="sidenavMore-options">Your activity</span>
      </Link>

      <Link to="#" className="sidenavMore-links">
        <BiBookmark className="sidenavMore-icons" />
        <span className="sidenavMore-options">Saved</span>
      </Link>

      <button
        className="sidenavMore-buttons"
        type="button"
      >
        <AiOutlineSun className="sidenavMore-icons" />
        <span className="sidenavMore-options">Switch appearance</span>
      </button>

      <Link to="#" className="sidenavMore-links">
        <TbAlertSquare className="sidenavMore-icons" />
        <span className="sidenavMore-options">Report a problem</span>
      </Link>

      <div className="sidenavMore-seperator1"></div>
     
      <button className="sidenavMore-buttons" type="button" onClick={handleSwitchAccount}>
        <span className="sidenavMore-options">Switch accounts</span>
      </button>

      <div className="sidenavMore-seperator2"></div>

      <button type="button" onClick={logout} className="sidenavMore-buttons">
        <span className="sidenavMore-options">Log out</span>
      </button>

    </div>
  );
};

export default SidenavMore;
