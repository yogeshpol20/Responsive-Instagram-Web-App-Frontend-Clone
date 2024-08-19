import React, { useContext, useEffect, useRef } from "react";
import "../Styles/Components/UnfollowModal.css";

import { UnfollowModalContext } from "../App";

const UnfollowModal = () => {
  const { setIsUnfollow,setFollowStatus ,FollwerClickedObj,profiles,setProfiles} = useContext(UnfollowModalContext);

  const containerRef = useRef(null);

  const handleCancel = () => {
    setIsUnfollow(false); //close the unfollow modal
  };

  const handleUnfollow = ()=>{

    let temp=profiles;

    temp.forEach((element)=>{
      if(element.id==FollwerClickedObj.id)
      {
        element.followStatus='Follow';
        setIsUnfollow(false); 
      }
    })
  }

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsUnfollow(false); //close the unfollow modal
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="unfollowModal">
      <div className="unfollowModal-container" ref={containerRef}>
        <div className="unfollowModal-profileDp">
          <img src={FollwerClickedObj.src} />
          <span className="unfollowModal-username">Unfollow @{FollwerClickedObj.username}</span>
        </div>

        <button type="button" onClick={handleUnfollow} className="unfollowModal-buttons unfollowButton">
          Unfollow
        </button>

        <button
          type="button"
          className="unfollowModal-buttons"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UnfollowModal;