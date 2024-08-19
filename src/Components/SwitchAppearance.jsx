import React, { useState, useEffect } from "react";
import "../Styles/Components/SwitchAppearance.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import Switch from "./Switch";

const SwitchAppearance = ({SwitchAppearance, setSwitchAppearance}) => {

  const [isCheched, setIsCheched] = useState(false);

  const handleClick = ()=>{
    setSwitchAppearance(!setSwitchAppearance);
  }

  useEffect(() => {
    if (isCheched) {
     document.body.style.backgroundColor ="black";
     document.body.style.color="white";
    } else {
      document.body.style.backgroundColor ="white";
      document.body.style.color="black";
    }
  }, [isCheched]);

  return (
    <div className="switchAppearance">
      <div className="sa-heading">
        <button className="sa-button" onClick={handleClick}>
          <MdKeyboardArrowLeft className="sa-arrowIcon" />
        </button>
        <span className="sa-title">Switch appearance</span>
        <span className="sa-icon">{isCheched ? <GoMoon /> : <FiSun />}</span>
      </div>

      <div className="sa-seperator"></div>

      <div className="sa-modeContainer">
        <span className="sa-modeName">Dark mode</span>
        <div className="sa-switchButton-div">
          <Switch isOn={isCheched} isOff={setIsCheched} />
        </div>
      </div>
    </div>
  );
};

export default SwitchAppearance;
