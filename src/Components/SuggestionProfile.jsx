import React, { useContext, useState } from "react";
import "../Styles/Components/SuggestionProfile.css";
import { Link } from "react-router-dom";
import { UnfollowModalContext } from "../App";

const SuggestionProfile = ({id,src,username,suggestion,followStatus}) => {

  const { setIsUnfollow,profiles,setProfiles,forsetFollowerClickedObj} = useContext(UnfollowModalContext);

  let temp = profiles;

  const [btnNameStyle, setBtnNameStyle] = useState({
    color: "rgb(0, 149, 246)",
  });

  const handleClick = () => {
    console.log("id",id);

    temp.forEach((element) => {
      if (element.id === id) {
        forsetFollowerClickedObj(id,src,username);
        if(element.followStatus=='Follow')
        {
          element.followStatus='Following'
          setBtnNameStyle({ color: "rgb(0, 55, 107)" });
        } 
        else if (followStatus === "Following") {
          setIsUnfollow(true); // Show unfollow modal.
          setBtnNameStyle({ color: "rgb(0, 149, 246)",});
        }
      }
    });

    setProfiles([...temp]);
  };
 
  return (
    <>
    <div className="SuggestionProfile">
      <div className="sp-profileDetails">
        <Link to="#" className="sp-link">
          <img src={src} className="sp-profilPhoto" alt="Profile photo" />
        </Link>

        <div className="sp-profile-data">
          <Link to="#" className="sp-link">
            <div className="sp-username">{username}</div>
          </Link>
          <div className="sp-profilename">{suggestion}</div>
        </div>
      </div>

      <button type="button" className="sp-button" onClick={handleClick}>
        <span className="sp-buttonName" style={btnNameStyle}>
          {followStatus}
        </span>
      </button>
    </div>

    </>
  );
};

export default SuggestionProfile;