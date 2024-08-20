import React, { useEffect, useState } from "react";
import "../Styles/Pages/ExplorePage.css";
import Footer from "../Components/Footer";
import Sidenav from "../Components/Sidenav";
import ProgressBar from "../Components/ProgressBar";
import LoadingEffect from "../Components/LoadingEffect";
import TopnavSearchInput from "../Components/TopnavSearchInput";
import { useNavigate } from "react-router-dom";

import photo1 from "../assets/images/marquez.jpg";
import photo2 from "../assets/images/yachtmaster.jpg";
import photo3 from "../assets/images/danielricciardo.jpg";
import photo4 from "../assets/images/bmwracing.jpg";
import photo5 from "../assets/images/book.jpg";
import photo6 from "../assets/images/banana.jpg";
import photo7 from "../assets/images/positano.jpg";
import photo8 from "../assets/images/tridhac.jpg";
import photo9 from "../assets/images/kylie.jpg";
import photo10 from "../assets/images/house.jpg";
import photo11 from "../assets/images/panigale.jpg";
import photo12 from "../assets/images/landohelmet.jpg";
import video1 from "../assets/video/motogp.mp4";
import video2 from "../assets/video/gopro.mp4";
import video3 from "../assets/video/swimming.mp4";

const mediaItems = [
  { type: "img", src: photo1, alt: "marc marquez" },
  { type: "img", src: photo2, alt: "Rolex watch" },
  { type: "video", src: video1 },
  { type: "img", src: photo3, alt: "Ricciardo" },
  { type: "img", src: photo4, alt: "BMW Racing" },
  { type: "video", src: video2 },
  { type: "img", src: photo5, alt: "Book" },
  { type: "img", src: photo6, alt: "banana" },
  { type: "img", src: photo7, alt: "amalfi coast" },
  { type: "img", src: photo8, alt: "tridha" },
  { type: "img", src: photo9, alt: "Sprinter" },
  { type: "img", src: photo10, alt: "house" },
  { type: "video", src: video3 },
  { type: "img", src: photo11, alt: "Panigale V4R" },
  { type: "img", src: photo12, alt: "Lando Norris" },
];

const ExplorePage = ({adminUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    // Check Authentication on component mount
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/"); // Redirect to auth page if not authenticated
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