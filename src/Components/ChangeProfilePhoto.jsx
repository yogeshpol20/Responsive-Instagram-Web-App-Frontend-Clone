import React, { useEffect, useRef } from "react";
import "../Styles/Components/ChangeProfilePhoto.css";

const ChangeProfilePhoto = () => {

  const containerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancel = ()=>{
    
  }

  return (
    <div className="changeProfilePhoto">
      <div className="changeProfilePhoto-container" ref={containerRef}>
        <div className="cpp-containerName">Change Profile Photo</div>

        <form onSubmit={handleSubmit} className="changeProfilePhoto-form">

          <label htmlFor="changeProfilePhoto" className="cpp-formLabel">
            Upload Photo
          </label>
          <input
            id="changeProfilePhoto"
            name="profilePhoto"
            hidden
            multiple
            type="file"
            accept="image/jpeg image/png"
          />

          <button type="button" className="changeProfilePhoto-buttons">
            <span className="cpp-removePhoto"> Remove Current Photo</span>
          </button>

          <button onClick={handleCancel} type="button" className="changeProfilePhoto-buttons">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeProfilePhoto;
