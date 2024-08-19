import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import { useNetworkStatus } from "./Components/NetworkStatus";
import OfflinePage from "./Pages/OfflinePage";

import LoadingPage from "./Pages/LoadingPage";
import AuthPage from "./Pages/AuthPage";
import SignUp from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import ForgotPassword from "./Pages/ForgotPassword";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import ExplorePage from "./Pages/ExplorePage";
import ErrorPage from './Pages/ErrorPage';

export const SwitchLoginFormContext = createContext();
export const UnfollowModalContext = createContext();

const App = () => {

  // SwitchLoginForm modal states.
  const [isSwitchLoginForm, setIsSwitchloginForm] = useState(false);


  //UnfollowContext states.
  const [isUnfollow, setIsUnfollow] = useState(false);

  // const [followStatus, setFollowStatus] = useState("Follow");
  let[FollwerClickedObj,setFollowerClickedObj]=useState({});
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      src: "jackmason.jpg",
      username: "jackmason",
      suggestion: "suggested for you",
      followStatus:'Follow',
    },
    {
      id: 2,
      src: "jeniffer.jpg",
      username: "jennifer__",
      suggestion: "suggested for you",
      followStatus:'Follow',
    },
    {
      id: 3,
      src: "biker.jpg",
      username: "fast_bikers",
      suggestion: "New to Instagram",
      followStatus:'Follow',
    },
    {
      id: 4,
      src: "coffeeshop.jpg",
      username: "galaxy_cafe",
      suggestion: "New to Instagram",
      followStatus:'Follow',
    },
    {
      id: 5,
      src: "noprofile.jpg",
      username: "alex4778",
      suggestion: "New to Instagram",
      followStatus:'Follow',
    },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);


//coment out to run  App Offline. 
  // const isOnline = useNetworkStatus();
  // if (!isOnline) {
  //   return <OfflinePage />;
  // }

  const adminUser = {
    username: "yogesh_pol",
    password: "Pass@1234",
    followers: 158,
    following: 385,
    posts: 0,
    bio: "❤️ 🏁🏎️ 🏍️ 🎧 📸 🎮 🌏",
    profileName: "yogesh Pol",
    profilePhoto: "/marc.jpg",
  };

  const authorizeUser = (username, password) => {
    if (username === adminUser.username && password === adminUser.password) {
      // Store user data in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(adminUser));
      return true; // Successful login
    } else {
      return false; // Failed login
    }
  };

  function forsetFollowerClickedObj(paraid,parasrc,parausername)
  {
    let obj={
      id: paraid,
      src: parasrc,
      username: parausername,
    }
    setFollowerClickedObj(obj);
  }

  return (
    <>
      <SwitchLoginFormContext.Provider
        value={{ isSwitchLoginForm, setIsSwitchloginForm }}
      >
        <UnfollowModalContext.Provider
          value={{
            isUnfollow,
            setIsUnfollow,
            profiles,
            setProfiles,
            // followStatus,
            // setFollowStatus,
            FollwerClickedObj,
            forsetFollowerClickedObj
          }}
        >
          {loading ? (
            <LoadingPage />
          ) : (
            <Routes>
              <Route path="/loading" element={<LoadingPage />} />
              <Route
                path="/"
                element={<AuthPage authorizeUser={authorizeUser} />}
              />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/login"
                element={<LoginPage authorizeUser={authorizeUser} />}
              />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route
                path="/homepage"
                element={<HomePage adminUser={adminUser} />}
              />
              <Route
                path="/explore"
                element={<ExplorePage adminUser={adminUser} />}
              />
              <Route
                path="/profilepage"
                element={<ProfilePage adminUser={adminUser} />}
              />
               <Route path="*" element={<ErrorPage />} />
            </Routes>
          )}
        </UnfollowModalContext.Provider>
      </SwitchLoginFormContext.Provider>
    </>
  );
};

export default App;
