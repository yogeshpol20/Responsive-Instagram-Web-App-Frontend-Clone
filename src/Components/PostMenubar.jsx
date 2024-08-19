import React, { useEffect, useRef } from "react";
import "../Styles/Components/PostMenubar.css";
import { TbUserSquare } from "react-icons/tb";
import { MdGridOn } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";

const PostMenubar = ({isPost,setIsPost,isSaved,setIsSaved,isTagged,setIsTagged,}) => {

  const postButtonRef = useRef(null);
  const savedButtonRef = useRef(null);
  const taggedButtonRef = useRef(null);

  useEffect(() => {
    if (isPost) {
      postButtonRef.current.focus();
    } else if (isSaved) {
      savedButtonRef.current.focus();
    } else if (isTagged) {
      taggedButtonRef.current.focus();
    }
  }, [isPost, isSaved, isTagged]);

  const handlePosts = () => {
    setIsPost(true);
    setIsSaved(false);
    setIsTagged(false);
  };

  const handleSaved = () => {
    setIsSaved(true);
    setIsPost(false);
    setIsTagged(false);
  };

  const handleTagged = () => {
    setIsTagged(true);
    setIsPost(false);
    setIsSaved(false);
  };

  return (
    <div className="postMenubar">

      <button
        type="button"
        onClick={handlePosts}
        className="postMenubar-buttons"
        ref={postButtonRef}
      >
        <div className="postMenubar-buttonContainer">
          <MdGridOn className="postMenubar-icons" />
          <span className="postMenubar-options">posts</span>
        </div>
      </button>

      <button
        type="button"
        onClick={handleSaved}
        className="postMenubar-buttons"
        ref={savedButtonRef}
      >
        <div className="postMenubar-buttonContainer">
          <BiBookmark className="postMenubar-icons" />
          <span className="postMenubar-options">saved</span>
        </div>
      </button>

      <button
        type="button"
        onClick={handleTagged}
        className="postMenubar-buttons"
        ref={taggedButtonRef}
      >
        <div className="postMenubar-buttonContainer">
          <TbUserSquare className="postMenubar-icons" />
          <span className="postMenubar-options">tagged</span>
        </div>
      </button>
      
    </div>
  );
};

export default PostMenubar;
