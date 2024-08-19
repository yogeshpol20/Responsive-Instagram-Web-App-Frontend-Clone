import React, { useContext } from "react";
import "../Styles/Components/Suggestions.css";
import { Link } from "react-router-dom";
import ProfileSwitch from "./ProfileSwitch";
import SuggestionProfile from "./SuggestionProfile";
import SuggestionFooter from "./SuggestionFooter";
import {UnfollowModalContext} from '../App';

const Suggestions = ({adminUser}) => {

  const {profiles} = useContext(UnfollowModalContext);

  return (
    <div className="suggestions">
      <div className="suggestions-userProfile">
        <ProfileSwitch
          src={adminUser.profilePhoto}
          username={adminUser.username}
          profilename={adminUser.profileName}
        />
      </div>

      <div className="suggestions-Container">
        <div className="suggestions-Header">
          <div className="suggestions-headerName">Suggested for you</div>
          <Link to="#" className="suggestions-link">
            <span>See All</span>
          </Link>
        </div>

        <div className="suggestionsBox">
          {profiles.map((profile) => (
            <div className="suggestedprofiles" key={profile.id}>
              <SuggestionProfile
                id={profile.id}
                src={profile.src}
                username={profile.username}
                suggestion={profile.suggestion}
                followStatus={profile.followStatus}
              />
            </div>
          ))}
        </div>
      </div>

      <footer className="suggestions-footer">
        <SuggestionFooter />
        <div className="suggestions-copyright">© 2024 INSTAGRAM FROM META</div>
      </footer>
      
    </div>
  );
};

export default Suggestions;