import React from "react";
import "../Styles/Components/CreateHighlightButton.css";
import { TfiPlus } from "react-icons/tfi";

const CreateHighlightButton = ({isNewHighlight, setIsNewHighlight}) => {

  const handleCreateNewHighlight = () => {
    setIsNewHighlight(!isNewHighlight);
  };

  return (
    <div className="createHighlightButton-container">
      <button
        type="button"
        onClick={handleCreateNewHighlight}
        className="createHighlightButton-button"
      >
        <span className="createHighlightButton-iconContainer">
          <TfiPlus className="createHighlightButton-icon" />
        </span>
        <span className="createHighlightButton-name">New</span>
      </button>
    </div>
  );
};

export default CreateHighlightButton;
