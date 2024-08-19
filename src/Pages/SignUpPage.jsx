import React, { useEffect, useState } from "react";
import "../Styles/Pages/SignUpPage.css";
import Input from "../Components/Input.jsx";
import GetApp from "../Components/GetApp.jsx";
import InstagramLogo from "../Components/InstagramLogo.jsx";
import OrSection from "../Components/OrSection.jsx";
import Button from "../Components/Button.jsx";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import PageTitle from "../Components/PageTitle.jsx";
import ButtonFbLoginTr from "../Components/ButtonFbLoginTr.jsx";

const SignUpPage = () => {
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signUpBtnStyle, setSignUpBtnStyle] = useState({
    opacity: "0.7",
    backgroundColor: "rgb(0,149,246)",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMobileOrEmail("");
    setFullName("");
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (mobileOrEmail && fullName && username && password.length >= 6) {
      setSignUpBtnStyle({
        opacity: "1",
        cursor: "pointer",
        backgroundColor: "rgb(0,149,246)",
      });
    } else {
      setSignUpBtnStyle({
        opacity: "0.7",
        backgroundColor: "rgb(0,149,246)",
      });
    }
  }, [mobileOrEmail, fullName, username, password]);

  
  return (
    <>
      <PageTitle title="Sign up &middot; Instagram" />
      <article className="signup-page">

        <main className="signup-main">
          <section className="signup-container">
            <div className="signup-form-div">
              <InstagramLogo />
              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="signup-info">
                  <span>
                    Sign up to see photos and videos from your friends.
                  </span>
                </div>

                <ButtonFbLoginTr />

                <OrSection />

                <div className="inputs">
                  <Input
                    type="text"
                    value={mobileOrEmail}
                    onChange={(e) => setMobileOrEmail(e.target.value.toLowerCase())}
                    label="Mobile Number or Email"
                  />
                </div>

                <div className="inputs">
                  <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    label="Full Name"
                  />
                </div>

                <div className="inputs">
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase())}
                    label="Username"
                  />
                </div>

                <div className="inputs">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                  />
                </div>

                <p className="contact-info">
                  <span>
                    <span className="info-span">
                      People who use our service may have uploaded your contact
                      information to Instagram.
                      <Link to="#" className="info-anchor">
                        Learn More
                      </Link>
                    </span>
                    <br />
                    By signing up, you agree to our
                    <Link to="#" className="info-anchor">
                      Terms
                    </Link>
                    ,
                    <Link to="#" className="info-anchor">
                      Privacy Policy
                    </Link>
                    and
                    <Link to="#" className="info-anchor">
                      Cookies Policy
                    </Link>
                    .
                  </span>
                </p>

                <Button
                  style={signUpBtnStyle}
                  onMouseOver={(e) => {
                    if (signUpBtnStyle.cursor === "pointer") {
                      e.target.style.backgroundColor = "#0866ff";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (signUpBtnStyle.cursor === "pointer") {
                      e.target.style.backgroundColor = "rgb(0,149,246)";
                    }
                  }}
                  onClick={handleSubmit}
                  name="Sign up"
                  type="submit"
                />
              </form>
            </div>

            <div className="login-div">
              <p>
                Have an account?
                <Link to="/login" className="login-link">
                  <span>Log in</span>
                </Link>
              </p>
            </div>

            <GetApp />
            
          </section>
        </main>

        <footer>
          <Footer />
        </footer>

      </article>
    </>
  );
};

export default SignUpPage;
