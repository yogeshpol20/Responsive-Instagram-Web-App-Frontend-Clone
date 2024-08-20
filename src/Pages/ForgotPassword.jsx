import React, { useEffect, useState } from "react";
import "../Styles/Pages/ForgotPassword.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import Button from "../Components/Button";
import PageTitle from "../Components/PageTitle";
import { GoLock } from "react-icons/go";
import logo from "../assets/images/logo.png";

const ForgotPassword = () => {
  const [input, setInput] = useState("");
  const [loginLinkBtn, setLoginLinkBtn] = useState({
    opacity: "0.3",
    backgroundColor: "rgb(0,149,246)",
    width: "290px",
  });

  useEffect(() => {
    if (input) {
      setLoginLinkBtn({
        cursor: "pointer",
        opacity: "1",
        backgroundColor: "rgb(0,149,246)",
        width: "290px",
      });
    } else {
      setLoginLinkBtn({
        opacity: "0.3",
        backgroundColor: "rgb(0,149,246)",
        width: "290px",
      });
    }
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <>
      <PageTitle title="Reset Password &middot; Instagram" />

      <article className="forgot-password">
        <nav className="fp-header">
          <div className="fp-headerContainer">
            <Link to="/" className="fp-headerlogo-link">
              <img src={logo} alt="Instagram" />
            </Link>
          </div>
        </nav>

        <main className="fp-main">
          <section className="fp-main-container">
            <div className="fp-container1">
              <div className="trouble-icon">
                <GoLock size={60} />
              </div>

              <div className="trouble-heading">
                <span>Trouble with logging in?</span>
              </div>

              <div className="fp-instruction">
                <span>
                  Enter your email address, phone number or username, and we'll
                  send you a link to get back into your account.
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="fpForm-input">
                  <Input
                    onChange={(event) => {
                      setInput(event.target.value.toLowerCase());
                    }}
                    value={input}
                    type="text"
                    label="Email address, phone number or Username"
                    borderRadius="6px"
                    labelColor="rgb(199,199,199)"
                    fontSize="13px"
                    fontWeight="600"
                    height="37.98px"
                    width="290px"
                  />
                </div>

                <Button
                  type="submit"
                  name="Send login link"
                  style={loginLinkBtn}
                  onMouseOver={(e) => {
                    if (loginLinkBtn.cursor === "pointer") {
                      e.target.style.backgroundColor = "#0866ff";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (loginLinkBtn.cursor === "pointer") {
                      e.target.style.backgroundColor = "rgb(0,149,246)";
                    }
                  }}
                />
              </form>

              <Link to="#" className="fplink-reset">
                <span>Can't reset your password?</span>
              </Link>

              <div className="fp-orSection">
                <div className="or-container">
                  <div className="or-line"></div>
                  <div className="or">OR</div>
                  <div className="or-line"></div>
                </div>
              </div>

              <Link to="/signup" className="fplink-createAccoount">
                <span>Create New Account</span>
              </Link>

              <Link to="/login" className="fplink-backlogin">
                <span>Back to Login</span>
              </Link>
            </div>
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </article>
    </>
  );
};

export default ForgotPassword;
