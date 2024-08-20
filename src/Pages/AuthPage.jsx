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
<<<<<<< HEAD
            <img src="./auth.png" alt="phone image" />
=======
            <img src="`${process.env.PUBLIC_URL}/auth.png`" alt="phone image" />
>>>>>>> 8586afbd6d22fb83d5345dca1d6674678a917227
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
