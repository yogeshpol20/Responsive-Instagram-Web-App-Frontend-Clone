import React from "react";
import "../Styles/Components/TaggedFirstPhoto.css";
import { TbUserSquare } from "react-icons/tb";

const TaggedFirstPhoto = () => {
  return (
    <div className="taggedPhoto">

      <div className="taggedPhoto-iconContainer">
        <TbUserSquare size={38} />
      </div>
      
      <h1 className="taggedPhoto-h1">Photos of you</h1>

      <div className="taggedPhoto-info">
        When people tag you in photos, they'll appear here.
      </div>

    </div>
  );
};

export default TaggedFirstPhoto;
