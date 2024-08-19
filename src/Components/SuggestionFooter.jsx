import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Components/SuggestionFooter.css";

const footerOptions = [
  "About",
  "Help",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Language",
  "Meta Verified",
];

const SuggestionFooter = () => {
  return (
    <div className="suggestionsFooter">

      <ul className="suggestionsFooterContent">
        {footerOptions.map((option, index) => (
          <li key={index} className="suggestionsFooterItem">
            <Link to="#"
              className={`suggestionsFooter-Link ${option === "Language" ? "suggestionsFooter-Language" : ""}`}>
              <span className="suggestionsFooter-options">{option}</span>
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default SuggestionFooter;