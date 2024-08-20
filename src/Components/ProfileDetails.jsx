import React, { useState,useContext} from "react";
import "../Styles/Components/ProfileDetails.css";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { BsGearWide } from "react-icons/bs";
import { TfiPlus } from "react-icons/tfi";

const ProfileDetails = ({
  isVerified,
  isSettingsOption,
  setIsSettingsOption,
  isNewHighlight,
  setIsNewHighlight,
  adminUser,
}) => {

  const handleSettingButton = () => {
    setIsSettingsOption(!isSettingsOption);
  };

  const handleCreateNewHighlight = () => {
    setIsNewHighlight(!isNewHighlight);
  };

  return (
    <section className="profileDetails">
      <div className="pd-photoContainer">
        <img src={adminUser.profilePhoto} alt="Profile Photo" className="pd-profilePhoto" />
      </div>

      <div className="pd-Menubar">
        <Link to="#" className="pd-username profileDetails-links">
          <h2>{adminUser.username}</h2>
        </Link>

        {isVerified ? <MdVerified className="pd-userVerification" /> : null}

        <div className="pd-MenubarOptions">
          <Link className="pd-popupOptions profileDetails-links">
            Edit profile
          </Link>

          <Link className="pd-popupOptions profileDetails-links">
            View archive
          </Link>
        </div>

        <button
          type="button"
          className="pd-profileSetting"
          onClick={handleSettingButton}
        >
          <BsGearWide size={24}/>
        </button>
      </div>

      <div className="pd-postsFollowers">
        <div className="pd-posts">
          <span>{adminUser.posts} </span>posts
        </div>

        <Link to="#" className="profileDetails-links">
          <span> {adminUser.followers} </span>
          followers
        </Link>

        <Link to="#" className="profileDetails-links">
          <span>{adminUser.following} </span>
          following
        </Link>
      </div>

      <div className="pd-profileBioSection">
        <span className="pd-profileUsername">{adminUser.profileName}</span>
        <span className="pd-profileBio">{adminUser.bio}</span>
      </div>

      <div className="pd-emptyGrid-div"></div>

      <div className="pd-highlightSection">
        <div className="pp-highlightContainer">
          <div className="pd-createHighlight">
            <button
              type="button"
              onClick={handleCreateNewHighlight}
              className="pd-createHighlight-button"
            >
              <span className="pd-createHighlight-iconContainer">
                <TfiPlus className="pd-createHighlight-icon" />
              </span>
              <span className="pd-createHighlight-name">New</span>
            </button>
          </div>
        </div>
      </div>

     {/* code for mobile screen resolution. */}
      <div className="pd-lowResMenubar">
        <div className="pd-lowResMenubar1">

          <Link to="#" className="pd-username profileDetails-links">
          <h2>{adminUser.username}</h2>
          </Link>
          
          {isVerified ? <MdVerified className="pd-userVerification" /> : null}
          
          <button
          type="button"
          className="pd-profileSetting"
          onClick={handleSettingButton}
        >
          <BsGearWide size={24}/>
        </button>

        </div>

        <div className="pd-lowResMenubar2">
          <Link className="pd-popupOptions profileDetails-links">
            Edit profile
          </Link>

          <Link className="pd-popupOptions profileDetails-links">
            View archive
          </Link>
        </div>

      </div>

    </section>
  );
};

export default ProfileDetails;
