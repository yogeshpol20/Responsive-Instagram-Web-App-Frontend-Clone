import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Components/LoginForm.css";
import Input from "./Input";
import OrSection from "./OrSection";
import ButtonFbLogin from "./ButtonFbLogin";
import { Link } from "react-router-dom";
import GetApp from "./GetApp";
import InstagramLogo from "./InstagramLogo";
import Button from "./Button";

const LoginForm = ({authorizeUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({ display: "none" });
  const [type, setType] = useState("password");
  const [btnName, setBtnName] = useState("Show");
  const [showBtnStyle, setShowBtnStye] = useState({ visibility: "hidden" });
  const [logInBtnStyle, setLoginBtnStyle] = useState({
    opacity: "0.7",
    backgroundColor: "rgb(0,149,246)",
  });

  const navigate = useNavigate();

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
  }, [username, password]);


  const handleLogin = () => {
    if (authorizeUser(username, password)) {
      // Redirect to the authorized area of your app
      window.location.href = '/homepage';
    } else {
      setLoginError({ display: "block" });
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="loginForm-section">

      <div className="loginForm-content">
        <InstagramLogo />

        <form className="loginForm" onSubmit={handleSubmit}>
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value.toLowerCase());
            }}
            type="text"
            label="Phone number, username, or email"
          />
          <div className="lf-passwordInput">
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
        </form>

        <OrSection />

        <ButtonFbLogin />

        <div className="lf-errorMsg" style={loginError}>
          Sorry, your password was incorrect. Please double-check your password.
        </div>

        <Link to="/forgotpassword" className="lf-forgotPass">
          <span id="forgot-pass">Forgot password?</span>
        </Link>

      </div>

      <div className="lf-createAccount">
        <p>
          Don't have an account?
          <Link to="/signup" className="lf-signupLink">
            <span>Sign up</span>
          </Link>
        </p>
      </div>

      <GetApp />
    </div>
  );
};

export default LoginForm;

