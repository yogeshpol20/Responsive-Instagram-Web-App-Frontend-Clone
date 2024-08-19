import React, { useContext } from "react";
import "../Styles/Components/ShareFirstPhoto.css";
import { SlCamera } from "react-icons/sl";
import { BsCamera } from "react-icons/bs";
import {createNewPostContext} from "../Pages/ProfilePage";

const ShareFirstPhoto = () => {
  const { setIsUploadContent } = useContext(createNewPostContext);

  const handleModal = () => {
    setIsUploadContent(true);
  };
  return (
    <div className="shareFirstPhoto">
    
      <button type="button" className="shareFirstPhoto-buttons">
        <div className="sfp-iconContainer">
          <SlCamera className="shareFirstPhoto-icon" />
        </div>
      </button>

      <h1 className="shareFirstPhoto-h1">Share Photos</h1>

      <div className="shareFirstPhoto-info">
        When you share photos, they will appear on your profile.
      </div>

      <button
        type="button"
        onClick={handleModal}
        className="sfp-uploadPhotoButton shareFirstPhoto-buttons"
      >
        Share your first photo
      </button>
    </div>
  );
};

export default ShareFirstPhoto;
