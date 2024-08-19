import React, { useState } from "react";
import "../Styles/Components/SearchModal.css";

const SearchModal = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClearButton = () => {
    setSearchInput("");
  };

  return (
    <div className="searchModal">
      <span className="searchModal-title">Search</span>

      <div className="searchModal-inputContainer">
        <input
          type="text"
          value={searchInput}
          onChange={handleInput}
          placeholder="Search"
          className="searchModal-input"
        />
        <button
          type="button"
          onClick={handleClearButton}
          className="searchModal-inputClearButton"
        >
          x
        </button>
      </div>

      <div className="searchModal-seperator"></div>
      {/* <hr className="searchModal-hr"></hr> */}

      <div className="searchModal-historyContainer">
        <div className="searchModal-recent">
          <span>Recent</span>
        </div>
        <div className="searchModal-history">
          <div className="searchModal-notification">No recent searches.</div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
