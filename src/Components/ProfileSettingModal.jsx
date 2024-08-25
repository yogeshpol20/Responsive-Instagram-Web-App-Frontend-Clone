import React, { useEffect, useRef } from "react";
import "../Styles/Components/ProfileSettingModal.css";
import { Link, useNavigate } from "react-router-dom";

const ProfileSettingModal = ({isSettingsOption,setIsSettingsOption}) => {
  const containerRef = useRef(null);
  let navigate = useNavigate();

  const handleCancel = () => {
    setIsSettingsOption(!isSettingsOption);
  };

  //Logout Functionality
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/logout"); // Redirect to authpage
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsSettingsOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="profileSettingModal">
      <div className="profileSettings-container" ref={containerRef}>
        <Link to="#" className="profileSettings-links">
          Apps and websites
        </Link>

        <Link to="#" className="profileSettings-links">
          QR code
        </Link>

        <Link to="#" className="profileSettings-links">
          Notifications
        </Link>

        <Link to="#" className="profileSettings-links">
          Settings and privacy
        </Link>

        <Link to="#" className="profileSettings-links">
          Supervision
        </Link>

        <button
          type="button"
          onClick={logout}
          className="profileSettings-buttons"
        >
          Log Out
        </button>

        <button
          type="button"
          className="profileSettings-buttons"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileSettingModal;
