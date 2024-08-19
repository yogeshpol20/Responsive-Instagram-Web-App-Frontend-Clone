import React, { useContext, useEffect, useRef } from "react";
import "../Styles/Components/PostMoreOptionModal.css";
import { Link } from "react-router-dom";

import {PostMoreOptionContext} from '../Pages/HomePage';
import { UnfollowModalContext } from "../App";

const PostMoreOptionModal = () => {

  const { setIsMoreOption } = useContext(PostMoreOptionContext);
  const { setIsUnfollow } = useContext(UnfollowModalContext);
  
  const containerRef = useRef(null);

  const handleCancel = () => {
    setIsMoreOption(false);
  };

  const handleUnfollow = () => {
    // setIsMoreOption(false);
  };


  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target)
    ) {
      setIsMoreOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="postMoreOptionModal">

      <div className="postMoreOption-container" ref={containerRef}>
    
        <Link to="#" className="postMoreOption-links postMoreOptionRed">
          Report
        </Link>

        <button type="button" onClick={handleUnfollow} className="postMoreOption-buttons postMoreOptionRed">
          Unfollow
        </button>

        <button type="button" className="postMoreOption-buttons">
          Add to favorites
        </button>

        <Link to="#" className="postMoreOption-links">
          Go to post
        </Link>

        <Link to="#" className="postMoreOption-links">
          Share to...
        </Link>

        <button type="button" className="postMoreOption-buttons">
          Copy link
        </button>

        <Link to="#" className="postMoreOption-links">
          Embed
        </Link>

        <Link to="#" className="postMoreOption-links">
          About this account
        </Link>

        <button type="button" onClick={handleCancel} className="postMoreOption-buttons">
          Cancel
        </button>

      </div>

    </div>
  );
};

export default PostMoreOptionModal;
