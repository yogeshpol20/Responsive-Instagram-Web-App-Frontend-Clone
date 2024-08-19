import React from "react";
import "../Styles/Components/PostLikeAnimation.css";
import { TbHeartFilled } from "react-icons/tb";

const PostLikeAnimation = () => {


  return (
    <div className="postLikeAnimation">
      <TbHeartFilled className="postLikeAnimation-icon"/>
    </div>
  );
};

export default PostLikeAnimation;

