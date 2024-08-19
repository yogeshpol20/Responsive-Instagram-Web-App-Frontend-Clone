import React, { useState } from "react";
import "../Styles/Components/TopnavSearchInput.css";
import { IoSearchOutline } from "react-icons/io5";

const TopnavSearchInput = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="topnavSearchInput">
      {!inputFocused && <IoSearchOutline className="topnavSearchInput-icon" />}
      <input
        type="text"
        className="topnavSearchInput-input"
        placeholder="Search"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default TopnavSearchInput;
