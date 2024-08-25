import React, { useContext, useEffect, useState, useRef } from "react";
import "../Styles/Components/SwitchLoginForm.css";
import Input from "./Input";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import InstagramLogo from "./InstagramLogo";

import { SwitchLoginFormContext } from "../App";
import PasswordField from "./PasswordField";

const SwitchLoginForm = () => {
  const { setIsSwitchloginForm } = useContext(SwitchLoginFormContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [logInBtnStyle, setLoginBtnStyle] = useState({
    opacity: "0.7",
    backgroundColor: "rgb(0,149,246)",
  });

  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {

    if (username && password.length >= 6) {
      setLoginBtnStyle({
        opacity: "1",
        cursor: "pointer",
        backgroundColor: "rgb(0,149,246)",
      });
    } else {
      setLoginBtnStyle({ opacity: "0.7", backgroundColor: "rgb(0,149,246)" });
    }

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsSwitchloginForm(false); // Close the form
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [username, password, setIsSwitchloginForm]);
  

  const handleCloseButton = () => {
    setIsSwitchloginForm(false); // Close the form
  };

  const handleLogin = () => {
    if (username === "" && password === "") {
      navigate("/homepage");
      setUsername("");
      setPassword("");
    } else {
      // open page (help us to login).
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="switchLoginForm">
      <div className="switchLoginForm-container" ref={containerRef}>
        <div className="closeButton-container">
          <button className="formClose-button" onClick={handleCloseButton}>
            <IoMdClose size={28} />
          </button>
        </div>

        <InstagramLogo />

        <form onSubmit={handleSubmit} className="switchLogin-form">
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value.toLowerCase());
            }}
            type="text"
            label="Phone number, username, or email"
          />

          <PasswordField 
            password={password}
            setPassword={setPassword}
          />

          <div className="saveLoginInfo">
            <input type="checkbox" id="savelogininfo" value="accountdetails" />
            <label htmlFor="savelogininfo" className="saveLoginInfo-label">
              Save login info
            </label>
          </div>

          <Button
            style={logInBtnStyle}
            onMouseOver={(e) => {
              if (logInBtnStyle.cursor === "pointer") {
                e.target.style.backgroundColor = "#0866ff";
              }
            }}
            onMouseOut={(e) => {
              if (logInBtnStyle.cursor === "pointer") {
                e.target.style.backgroundColor = "rgb(0,149,246)";
              }
            }}
            onClick={handleSubmit}
            type="submit"
            name="Log in"
          />

          <Link to="/forgotpassword" className="switchLogin-forgotPass">
            <span>Forgot password?</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SwitchLoginForm;
