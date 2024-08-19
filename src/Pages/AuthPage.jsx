import React, { useState } from "react";
import "../Styles/Pages/AuthPage.css";
import LoginForm from "../Components/LoginForm";
import Footer from "../Components/Footer";
import PageTitle from "../Components/PageTitle";

const AuthPage =  ({authorizeUser}) => {
  return (
    <>
      <PageTitle title="Instagram" />
      <article className="authPage">

        <main className="authMain">
          <div className="leftContainer">
            <img src="public/auth.png" alt="phone image" />
          </div>

          <section className="rightContainer">
            <LoginForm authorizeUser={authorizeUser}/>
          </section>
        </main>

        <footer className="authFooter">
          <Footer />
        </footer>
        
      </article>
    </>
  );
};

export default AuthPage;
