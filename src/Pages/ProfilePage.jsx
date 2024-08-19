import React, { createContext, useContext, useEffect, useState } from "react";
import "../Styles/Pages/ProfilePage.css";
import Sidenav from "../Components/Sidenav";
import Footer from "../Components/Footer";
import PageTitle from "../Components/PageTitle";
import PostMenubar from "../Components/PostMenubar";
import ShareFirstPhoto from "../Components/ShareFirstPhoto";
import ProfileDetails from "../Components/ProfileDetails";
import { Link, useNavigate } from "react-router-dom";
import { FaThreads } from "react-icons/fa6";
import { BsGearWide } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import SwitchLoginForm from "../Components/SwitchLoginForm";
import TaggedPhoto from "../Components/TaggedFirstPhoto";
import CreateHighlightModal from "../Components/CreateHighlightModal";
import ProfileSettingModal from "../Components/ProfileSettingModal";
import UploadContentModal from "../Components/UploadContentModal";

import {SwitchLoginFormContext} from '../App';

export const createNewPostContext = createContext();

const ProfilePage = ({adminUser}) => {

  const navigate = useNavigate();

  const {isSwitchLoginForm,setIsSwitchloginForm} = useContext(SwitchLoginFormContext);

  //Modal States
  const [isSettingsOption, setIsSettingsOption] = useState(false);
  const [isNewHighlight, setIsNewHighlight] = useState(false);
  const [isUploadContent, setIsUploadContent] = useState(false);
 
 

  // Post Menubar States
  const [isPost, setIsPost] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [isTagged, setIsTagged] = useState(false);


  // for mobile screen TopNav
  const [isLoginForm, setIsLoginForm] = useState(false);

  const isVerified = true;

  const handleTopnavForm = ()=>{
    setIsSwitchloginForm(true); // Trigger the form visibility
  }

  useEffect(
    () => {
      // Check Authentication on component mount
      const user = sessionStorage.getItem("user");
      if (!user) {
        navigate("/"); // Redirect to login page if not authenticated
      }
    }, [navigate]);

  return (
    <>
      <PageTitle title="yogesh Pol (@yogesh_pol) &middot; Instagram" />

      <createNewPostContext.Provider 
      value={{isUploadContent, setIsUploadContent}}>

      <article className="profilePage">
      
      {isSettingsOption && (
        <ProfileSettingModal
          isSettingsOption={isSettingsOption}
          setIsSettingsOption={setIsSettingsOption}
        />
      )}

      {isNewHighlight && (
        <CreateHighlightModal
          isNewHighlight={isNewHighlight}
          setIsNewHighlight={setIsNewHighlight}
        />
      )}

      {isUploadContent && <UploadContentModal
        isUploadContent={isUploadContent}
        setIsUploadContent={setIsUploadContent}
      />}

      {isSwitchLoginForm && <SwitchLoginForm/>}


      <aside className="profilePage-leftSide">
        <Sidenav adminUser={adminUser}/>
      </aside>

      <section className="profilePage-rightSide">
        <main className="profilePage-main">
          <header>
            <ProfileDetails
              isVerified={isVerified}
              isSettingsOption={isSettingsOption}
              setIsSettingsOption={setIsSettingsOption}
              isNewHighlight={isNewHighlight}
              setIsNewHighlight={setIsNewHighlight}
              adminUser={adminUser}
            />
          </header>

          <PostMenubar
            isPost={isPost}
            setIsPost={setIsPost}
            isSaved={isSaved}
            setIsSaved={setIsSaved}
            isTagged={isTagged}
            setIsTagged={setIsTagged}
          />

          {isPost && <ShareFirstPhoto />}
          {isSaved && null}
          {isTagged && <TaggedPhoto/>}
         
        </main>

        <footer className="profilePage-footer">
          <Footer />
        </footer>

      </section>

      {/* code for mobile top navbar */}
      <header className="profilePage-topNavbar">
        <Link to="#" className="pp-topNavbar-links">
          <BsGearWide className="pp-topNavbar-icons" />
        </Link>
        <button
          type="button"
          onClick={handleTopnavForm}
          className="pp-topNavbar-button"
        >
          <span>
            yogesh_pol
            <MdKeyboardArrowDown
              size={20}
              className="pp-topNavbar-arrowIcon"
            />
          </span>
        </button>
        <Link to="#" className="pp-topNavbar-links">
          <FaThreads className="pp-topNavbar-icons" />
        </Link>
      </header>
    </article>
      </createNewPostContext.Provider>
    </>
  );
};

export default ProfilePage;