import React from "react";
import "../Styles/Components/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { to: "#", label: "Meta" },
    { to: "#", label: "About" },
    { to: "#", label: "Blog" },
    { to: "#", label: "Jobs" },
    { to: "#", label: "Help" },
    { to: "#", label: "API" },
    { to: "#", label: "Privacy" },
    { to: "#", label: "Terms" },
    { to: "#", label: "Locations" },
    { to: "#", label: "Instagram Lite" },
    { to: "#", label: "Threads" },
    { to: "#", label: "Contact Uploading & Non-Users" },
    { to: "#", label: "Meta Verified" },
  ];
  return (
    <div className="footer-instagram">
      <div className="footer-div1">
        <div className="footer-div2">
          <div className="footer-container1">
            {links.map(({ to, label }, index) => (
              <div key={index} className="content">
                <Link to={to} className="footer-link">
                  <span>{label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-container2">
          <span className="language">
            <select className="language-select" defaultValue="english-uk">
              {[
                { value: "afrikan", label: "Afrikaans" },
                { value: "arabic", label: "العربية" },
                { value: "german", label: "Deutsch" },
                { value: "english", label: "English" },
                { value: "english-uk", label: "English (UK)" },
                { value: "spanish", label: "Español" },
                { value: "french", label: "Français" },
                { value: "italian", label: "italiano" },
                { value: "japanese", label: "日本語" },
                { value: "korean", label: "한국어" },
                { value: "portuguese", label: "Português" },
                { value: "russian", label: "русский" },
                { value: "thai", label: "ภาษาไทย" },
                { value: "turkish", label: "Türkçe" },
                { value: "chinese", label: "中文" },
                { value: "gujarati", label: "ગુજરાતી" },
                { value: "hindi", label: "हिंदी" },
                { value: "marathi", label: "मराठी" },
                { value: "kannada", label: "ಕನ್ನಡ" },
                { value: "telugu", label: "తెలుగు" },
                { value: "tamil", label: "தமிழ்" },
                { value: "nepali", label: "नेपाली" },
                { value: "romanian", label: "română" },
              ].map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </span>

          <div className="company-name">
            <span>© 2024 Instagram from Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
