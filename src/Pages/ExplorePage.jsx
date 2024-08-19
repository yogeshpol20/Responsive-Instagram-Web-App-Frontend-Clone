import React, { useEffect, useState } from "react";
import "../Styles/Pages/ExplorePage.css";
import Footer from "../Components/Footer";
import Sidenav from "../Components/Sidenav";
import ProgressBar from "../Components/ProgressBar";
import LoadingEffect from "../Components/LoadingEffect";
import TopnavSearchInput from "../Components/TopnavSearchInput";
import { useNavigate } from "react-router-dom";

const mediaItems = [
  { type: "img", src: "/marquez.jpg", alt: "marc marquez" },
  { type: "img", src: "yachtmaster.jpg", alt: "Rolex watch" },
  { type: "video", src: "/motogp.mp4" },
  { type: "img", src: "/danielricciardo.jpg", alt: "Ricciardo" },
  { type: "img", src: "bmwracing.jpg", alt: "BMW Racing" },
  { type: "video", src: "/gopro.mp4" },
  { type: "img", src: "/book.jpg", alt: "Book" },
  { type: "img", src: "/banana.jpg", alt: "banana" },
  { type: "img", src: "/post1.jpg", alt: "amalfi coast" },
  { type: "img", src: "/tridhac.jpg", alt: "tridha" },
  { type: "img", src: "/kylie.jpg", alt: "Sprinter" },
  { type: "img", src: "/house.jpg", alt: "house" },
  { type: "video", src: "/swimming.mp4" },
  { type: "img", src: "/panigale.jpg", alt: "Panigale V4R" },
  { type: "img", src: "/landohelmet.jpg", alt: "Lando Norris" },
];

const ExplorePage = ({adminUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    // Check Authentication on component mount
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/"); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  return (
    <article className="explorePage">
      <ProgressBar />

      <aside className="ep-leftSide">
        <Sidenav adminUser={adminUser}/>
      </aside>

      <section className="ep-rightSide">
        <main className="explorePage-main">
          <section className="explorePage-Content">
            {mediaItems.map((item, index) => (
              <div key={index} className={`gridItem item${index + 1}`}>
                {item.type === "img" ? (
                  <img src={item.src} alt={item.alt} />
                ) : (
                  <video src={item.src} />
                )}
              </div>
            ))}
          </section>

          <div className="ep-loadingEffect">
            <LoadingEffect />
          </div>
        </main>

        <footer className="explorePage-footer">
          <Footer />
        </footer>
      </section>
      

      {/* Top navbar for mobile screen */}
      <nav className="explorePage-topNavbar">
        <TopnavSearchInput />
      </nav>

    </article>
  );
};

export default ExplorePage;