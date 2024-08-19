import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Components/PostHeader.css";
import { MdVerified } from "react-icons/md";
import { LuDot, LuSend } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";


const PostHeader = ({
  profilePhoto,
  user,
  verified,
  time,
  location,
  audioSrc,
}) => {
  return (
    <div className="postHeader">
      <Link to="#" className="postHeader-links">
        <img
        //   src={profilePhoto}
        src="/marc.jpg"
          alt="profile photo"
          className="postHeader-userphoto"
        />
      </Link>

      <div className="postInfo">
        <div className="postInfo1">
          <Link to="#" className="postHeader-links">
            {/* <span className="postProfileName">{user}</span> */}
            <span className="postProfileName">yogesh pol</span>
          </Link>
          {verified && <MdVerified className="userVerification" />}
          <span className="postTimeSeparator">
            <LuDot />
          </span>
          <Link to="#" className="postHeader-links">
            {/* <span className="postTime">{time}</span> */}
            <span className="postTime">5m</span>
          </Link>
        </div>
        <div className="postInfo2">
          {/* {location && (
            <Link to="#" className="postHeader-links">
              <span className="postLocation">{location}</span>
            </Link>
          )} */}

         
            <Link to="#" className="postHeader-links">
              <span className="postLocation">italy</span>
            </Link>
     

          {audioSrc && (
            <Link to="#" className="postHeader-links">
              <div>
                {/* <audio>
             <source src={audioSrc} type="audio/mpeg">
            Your browser does not support the audio element.
            </audio> */}
              </div>
            </Link>
          )}
        </div>
      </div>

      <Link to="#" className="postHeader-links">
        <BsThreeDots className="postHeaderOption" />
      </Link>
    </div>
  );
};

export default PostHeader;
