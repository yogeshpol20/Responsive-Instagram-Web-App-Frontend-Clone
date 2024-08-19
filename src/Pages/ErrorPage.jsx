import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Pages/ErrorPage.css";
import Footer from "../Components/Footer";
import PageTitle from "../Components/PageTitle";

const ErrorPage = () => (
 <>
   <PageTitle title="Page not found &middot; Instagram"/>
   <article className="errorPage">

    <main className="errorPageMain">
      <div className="errorPageContent">
        <h2 className="errorPageH2">Sorry, this page isn't available.</h2>
        <div className="errorPageMessage">
          <span>
            The link you followed may be broken, or the page may have been
            removed.
            <Link to="/" className="errorPage-Link">
              Go back to Instagram.
            </Link>
          </span>
        </div>
      </div>
    </main>

    <footer>
      <Footer />
    </footer>
    
  </article>
 </>
);

export default ErrorPage;
