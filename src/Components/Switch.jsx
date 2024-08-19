import React from "react";
import "../Styles/Components/Switch.css";

const Switch = ({ isOn, isOff }) => {
  const handleToggle = () => {
    isOff(!isOn);
  };

  return (
    <div className="switch-container">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#4cd964" }}
        className="switch-label"
        htmlFor={`switch-new`}
      >
        <span className={`switch-button`} />
      </label>
    </div>
  );
};

export default Switch;
