import React, { useState } from "react";
import "../Styles/Components/Sidenav.css";
import { Link, useLocation} from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgAddR } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { FaInstagram } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { RiAddBoxFill } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";

import logo from "../assets/images/logo.png";
import reelsIcon from "../assets/images/reels-icon.png";

import SidenavMore from "./SidenavMore";



const Sidenav = ({adminUser}) => {

  const location = useLocation();
 
  const [moreOption, setMoreOption] = useState(false);

  const [optionBtnStyle, setOptionBtnStyle] = useState({ fontWeight: "480" });
  const [toggleOptionBtnStyle, setToggleOptionBtnStyle] = useState(false);

  const [isSearched, setIsSearched] = useState(false);

  const displayMore = () => {
    setMoreOption(!moreOption);
  };

  const optionStyle = (path) => {
    return location.pathname === path ? { fontWeight: "700" } : { fontWeight: "480" }
  };

  const handleOptionBtnStyle =()=>{
    setOptionBtnStyle({fontWeight:"700"});
  }

  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <img src={logo} alt="Instagram logo" className="insta-logo" />
        <Link to="/homepage" className="insta-icon-container">
          <FaInstagram size={45} className="insta-icon" />
        </Link>
      </div>

      <div className="sidenav-buttons">
        <button className="sidenav-button">
          <Link to="/homepage" className="sidenav-BtnLink">
            {location.pathname === "/homepage" ? (
              <GoHomeFill size={28} className="sidenav-icon" />
            ) : (
              <GoHome size={28} className="sidenav-icon" />
            )}
            <span
              style={optionStyle("/homepage")}
              className="sidenav-btn-name sidebar-icon-name"
            >
              Home
            </span>
          </Link>
        </button>

        <button type="button" className="sidenav-button search-btn">
          {isSearched ? (
            <IoSearch size={27} className="sidenav-icon" />
          ) : (
            <IoSearchOutline size={27} className="sidenav-icon" />
          )}

          <span className="sidenav-btn-name sidebar-icon-name">Search</span>
        </button>

        <button className="sidenav-button">
          <Link to="/explore" className="sidenav-BtnLink">
            {location.pathname === "/explore" ? (
              <MdExplore size={28} className="sidenav-icon" />
            ) : (
              <MdOutlineExplore size={28} className="sidenav-icon" />
            )}
            <span
              style={optionStyle("/explore")}
              className="sidenav-btn-name sidebar-icon-name"
            >
              Explore
            </span>
          </Link>
        </button>

        <button className="sidenav-button">
          <Link to="#" className="sidenav-BtnLink">
            <img
              src={reelsIcon}
              className="sidenav-icon-img reels"
              alt="Reels"
            />
            <span className="sidenav-btn-name sidebar-icon-name">Reels</span>
          </Link>
        </button>

        <button className="sidenav-button">
          <Link to="#" className="sidenav-BtnLink">
            {location.pathname === "/messages" ? (
              <RiMessengerFill size={28} className="sidenav-icon" />
            ) : (
              <RiMessengerLine size={28} className="sidenav-icon" />
            )}
            <span className="sidenav-btn-name sidebar-icon-name">Messages</span>
          </Link>
        </button>

        <button className="sidenav-button notification-btn">
          <Link to="#" className="sidenav-BtnLink">
            {location.pathname === "/notifications" ? (
              <IoMdHeart size={27} className="sidenav-icon" />
            ) : (
              <IoMdHeartEmpty size={27} className="sidenav-icon" />
            )}
            <span className="sidenav-btn-name sidebar-icon-name">
              Notifications
            </span>
          </Link>
        </button>

        <button className="sidenav-button">
          <Link to="#" className="sidenav-BtnLink">
            {location.pathname === "/create" ? (
              <RiAddBoxFill size={25} className="sidenav-icon" />
            ) : (
              <CgAddR size={25} className="sidenav-icon" />
            )}
            <span className="sidenav-btn-name sidebar-icon-name">Create</span>
          </Link>
        </button>

        {moreOption && (
          <aside className="sidenav-moreOption">
            <SidenavMore setMoreOption={setMoreOption} />
          </aside>
        )}

        <button className="sidenav-button">
          <Link to="/profilepage" className="sidenav-BtnLink">
            <img
              src={adminUser.profilePhoto}
              style={{
                borderRadius: "50%",
                border:
                  location.pathname === "/profilepage"
                    ? "2px solid black"
                    : "none",
              }}
              className="sidenav-icon-img"
              alt="Profile Photo"
            />
            <span
              style={optionStyle("/profilepage")}
              className="sidenav-btn-name sidebar-icon-name"
            >
              Profile
            </span>
          </Link>
        </button>

        <button className="sidenav-button thread-btn">
          <Link to="#" className="sidenav-BtnLink">
            <FaThreads size={26} className="sidenav-icon" />
            <span className="sidenav-btn-name sidebar-icon-name">Threads</span>
            <OpenInNewOutlinedIcon
              className="sidenav-threads-arrow"
              style={{ color: "rgb(146,146,146)", fontSize: "20px" }}
            />
          </Link>
        </button>

        <button className="sidenav-button menu-btn" onClick={displayMore}>
          {moreOption ? (
            <TfiMenu size={26} className="sidenav-icon" />
          ) : (
            <AiOutlineMenu size={26} className="sidenav-icon" />
          )}
          <span className="sidenav-btn-name sidebar-icon-name">More</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;