import React from "react";
import "../Styles/Pages/LoginPage.css";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";
import PageTitle from "../Components/PageTitle";

const LoginPage = ({authorizeUser}) => {
  return (
    <>
      <PageTitle title="Login &middot; Instagram" />

      <article className="LoginPage">

        <main className="LoginPage-main">
          <LoginForm authorizeUser={authorizeUser}/>
        </main>

        <footer>
          <Footer />
        </footer>

      </article>
    </>
  );
};

export default LoginPage;
