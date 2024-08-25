import React, { useState } from "react";
import "../Styles/Components/PasswordField.css";

const PasswordField = ({password,setPassword}) => {
  const [type, setType] = useState("password");
  const [btnName, setBtnName] = useState("Show");
  const [showBtnStyle, setShowBtnStye] = useState({ visibility: "hidden" });

  const showPassword = () => {
    if (type === "password") {
      setType("text");
      setBtnName("Hide");
    } else {
      setType("password");
      setBtnName("Show");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setShowBtnStye({ visibility: "visible" });
  };

  return (
    <div className="passwordField">
      <input
        type={type}
        value={password}
        onChange={handlePassword}
        className="passwordField-input"
        placeholder=" "
      />
      <label className="passwordField-placeholder">Password</label>

      {password !== "" && (
        <button
          className="passwordField-button"
          style={showBtnStyle}
          onClick={showPassword}
          type="button"
        >
          {btnName}
        </button>
      )}
    </div>
  );
};

export default PasswordField;
