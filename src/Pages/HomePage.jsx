import React, { createContext, useContext, useEffect, useState } from "react";
import "../Styles/Pages/HomePage.css";
import { useNavigate } from "react-router-dom";
import Sidenav from "../Components/Sidenav";
import Suggestions from "../Components/Suggestions";
import Footer from "../Components/Footer";
import Story from "../Components/Story";
import Post from "../Components/Post";
import ProgressBar from "../Components/ProgressBar";
import LoadingEffect from "../Components/LoadingEffect";
import SwitchLoginForm from "../Components/SwitchLoginForm";
import UnfollowModal from "../Components/UnfollowModal";
import PageTitle from "../Components/PageTitle";

import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

import logo from "../assets/images/logo.png";
import marcmarquez93Dp from "../assets/images/marcmarquez93.jpg";
import americangp from "../assets/images/americangp.jpg";
import motogpDp from "../assets/images/motogp.jpg";
import videoMotogp from "../assets/video/motogp.mp4";
import jenna_martinDP from "../assets/images/ana.webp";
import jennaMartinPhoto from "../assets/images/anna1.jpg";
import jackshew58Dp from "../assets/images/asa.jpg";
import aurora from "../assets/images/aurora.jpg";
import anna__hartleyDp from "../assets/images/monica.jpg";
import island from "../assets/images/vacation.jpg";

import { SwitchLoginFormContext } from "../App";
import { UnfollowModalContext } from "../App";
import LogOutModal from "../Components/LogOutModal";


export const PostMoreOptionContext = createContext();

const HomePage = ({adminUser}) => {

  //context
  const { isSwitchLoginForm } = useContext(SwitchLoginFormContext);
  const { isUnfollow } = useContext(UnfollowModalContext);

  // mobile Navbar states
  const [inputFocused, setInputFocused] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check Authentication on component mount
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/"); // Redirect to auth page if not authenticated
    }
  }, [navigate]);


   // mobile navbar input functions.
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

 
  const [posts, setposts] = useState([
    {
      id:1,
      user: "marcmarquez93",
      profilePhoto: marcmarquez93Dp,
      verified: true,
      time: "1m",
      location: "Austin-Texas",
      photo: americangp,
      likes: 34,
    },
    {
      id:2,
      user: "motogp",
      profilePhoto: motogpDp,
      verified: true,
      time: "10m",
      location: "Original audio",
      video: videoMotogp,
      likes: 928,
    },
    {
      id:3,
      user: "Jenna_martin",
      profilePhoto: jenna_martinDP,
      verified: false,
      time: "22m",
      location: "Paris",
      photo: jennaMartinPhoto,
      likes: 56,
    },
    {
      id:4,
      user: "Jackshew58",
      profilePhoto: jackshew58Dp,
      verified: false,
      time: "2h",
      location: "",
      photo: aurora,
      likes: 543,
    },
    {
      id:5,
      user: "Ana__Hartley",
      profilePhoto: anna__hartleyDp,
      verified: false,
      time: "8h",
      location: "",
      photo: island,
      likes: 1235,
    },
  ]);

  return (
    <>
      <PageTitle title="Instagram" />
      <article className="homePage">
        <ProgressBar />
       
        {isSwitchLoginForm && <SwitchLoginForm />}

        {isUnfollow && <UnfollowModal />}

        <aside className="hp-leftSide">
          <Sidenav adminUser={adminUser} />
        </aside>

        <section className="hp-rightSide">
          <main className="hp-main">
            <div className="homePageContent">
              <div className="timeline">
                <div className="storyPannel">
                  <Story />
                </div>

                <div className="timelinePosts">
                  {posts.map((post, id) => (
                    <Post
                      key={id}
                      user={post.user}
                      profilePhoto={post.profilePhoto}
                      verified={post.verified}
                      time={post.time}
                      location={post.location}
                      photo={post.photo}
                      video={post.video}
                      likes={post.likes}
                      adminUser={adminUser}
                    />
                  ))}
                </div>

                <div className="hp-loadingEffect">
                  <LoadingEffect />
                </div>
              </div>

              <div className="hp-suggestionBox">
                <Suggestions adminUser={adminUser} />
              </div>
            </div>
          </main>

          <footer className="hp-footer">
            <Footer />
          </footer>
        </section>

        {/* topnav code for HomePage mobile screen. */}
        <nav className="homePage-topNavbar">
          <div>
            <img
              src={logo}
              alt="Instagram Logo"
              className="hp-topNavbar-logo"
            />
          </div>

          <div className="hp-topNavbar-container">
            <div className="hp-topNavbar-searchBox">
              {!inputFocused && (
                <IoSearchOutline className="hp-topNavbar-searchIcon" />
              )}
              <input
                type="text"
                className="hp-topNavbar-input"
                placeholder="Search"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <IoMdHeartEmpty className="hp-topNavbar-heartIcon" />
          </div>
        </nav>
        
      </article>
    </>
  );
};

export default HomePage;