import React, { useContext, useRef, useEffect } from "react";
import "../Styles/Components/UploadContentModal.css";
import { createNewPostContext } from "../Pages/ProfilePage";
import { IoMdClose } from "react-icons/io";
import photoVideoIcon from "../assets/images/photovideoicon.png";

const UploadContentModal = () => {
  const { setIsUploadContent } = useContext(createNewPostContext);
  
  const containerRef = useRef(null);

  const handleCloseButton = () => {
    setIsUploadContent(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsUploadContent(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="uploadContentModal">
      <button
        type="button"
        onClick={handleCloseButton}
        className="uploadContent-closeButton"
      >
        <IoMdClose size={26} />
      </button>
      <div className="uploadContent-container1" ref={containerRef}>
        <div className="uploadContent-heading">
          <span>Create new post</span>
        </div>

        <div className="uploadContent-container2">
          <div className="uploadContent-icon">
            <img src={photoVideoIcon} alt="photo video icon" />
          </div>
          <span className="uploadContent-info">
            Drag photos and videos here
          </span>

          <form onSubmit={handleSubmit}>
            <label htmlFor="postContent" className="uploadContent-button">
              Select from computer
            </label>
            <input
              hidden
              multiple 
              type="file"
              id="postContent"
              name="postContent"
              accept=".jpg, .jpeg, .png, .heic, .heif, .mp4"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadContentModal;