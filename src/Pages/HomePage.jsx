import React, { createContext, useContext, useEffect, useState } from "react";
import Sidenav from "../Components/Sidenav";
import Suggestions from "../Components/Suggestions";
import "../Styles/Pages/HomePage.css";
import Footer from "../Components/Footer";
import Story from "../Components/Story";
import Post from "../Components/Post";
import ProgressBar from "../Components/ProgressBar";
import LoadingEffect from "../Components/LoadingEffect";
import PageTitle from "../Components/PageTitle";
import SwitchLoginForm from "../Components/SwitchLoginForm";

import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

import { SwitchLoginFormContext } from "../App";
import {UnfollowModalContext} from '../App';

import UnfollowModal from "../Components/UnfollowModal";
import { useNavigate } from "react-router-dom";


export const PostMoreOptionContext = createContext();

const HomePage = ({adminUser}) => {

  const navigate = useNavigate();

  //context
  const { isSwitchLoginForm } = useContext(SwitchLoginFormContext);
  const { isUnfollow } = useContext(UnfollowModalContext);

  // mobile Navbar states
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    // Check Authentication on component mount
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/"); // Redirect to login page if not authenticated
    }
  }, [navigate]);



   // mobile navbar input functions.
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

 
  const [posts, setPosts] = useState([
    {
      id:1,
      user: "marcmarquez93",
      profilePhoto: "/marcmarquez93.jpg",
      verified: false,
      time: "1m",
      location: "Austin-Texas",
      photo: "/americangp.jpg",
      likes: 34,
    },
    {
      id:2,
      user: "motogp",
      profilePhoto: "/motogp.jpg",
      verified: true,
      time: "10m",
      location: "Original audio",
      video: "/motogp.mp4",
      likes: 928,
    },
    {
      id:3,
      user: "Jenna_martin",
      profilePhoto: "/ana.webp",
      verified: false,
      time: "22m",
      location: "Paris",
      photo: "/anna1.jpg",
      likes: 56,
    },
    {
      id:4,
      user: "Jackshew58",
      profilePhoto: "/asa.jpg",
      verified: false,
      time: "2h",
      location: "",
      photo: "/aurora.jpg",
      likes: 543,
    },
    {
      id:5,
      user: "Ana__Hartley",
      profilePhoto: "/monica.jpg",
      verified: false,
      time: "8h",
      location: "",
      photo: "/vacation.jpg",
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
            <Sidenav adminUser={adminUser}/>
          </aside>

          <section className="hp-rightSide">
            <main className="hp-main">
              <div className="homePageContent">
                <div className="timeline">
                  <div className="storyPannel">
                    <Story />
                  </div>

                  <div className="timelinePosts">
                    {posts.map((post,id) => (
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
                  <Suggestions 
                  adminUser={adminUser}
                  />
                </div>
              </div>
            </main>

            <footer className="hp-footer">
              <Footer />
            </footer>
          </section>

          {/* topnav code for HomePage mobile screen. */}
          <div className="top-navbar">
            <h1 className="navbar-container1">
              <img
                src="/logo.png"
                alt="Instagram Logo"
                className="navbar-instaLogo"
              />
            </h1>

            <div className="navbar-container2">
              <div className="navbar-searchBox">
                {!inputFocused && (
                  <IoSearchOutline className="navbar-searchIcon" />
                )}
                <input
                  type="text"
                  className="navbar-input"
                  placeholder="Search"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>

              <div>
                <IoMdHeartEmpty className="navbar-heartIcon" />
              </div>
            </div>
          </div>
        </article>
    </>
  );
};

export default HomePage;