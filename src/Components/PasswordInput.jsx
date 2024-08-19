import React, { useState } from "react";
import "../Styles/Components/PasswordInput.css";
import Input from "./Input";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
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
    <form className="password-input">
      <Input
        value={password}
        onChange={handlePassword}
        type={type}
        label="Password"
      />
      {password !== "" && (
        <button
          className="lf-passBtn"
          style={showBtnStyle}
          onClick={showPassword}
          type="button"
        >
          {btnName}
        </button>
      )}
    </form>
  );
};

export default PasswordInput;
