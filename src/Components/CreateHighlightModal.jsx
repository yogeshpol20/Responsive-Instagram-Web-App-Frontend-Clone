import React, { useEffect, useRef, useState } from "react";
import "../Styles/Components/CreateHighlightModal.css";
import { RiCloseLargeFill } from "react-icons/ri";

const CreateHighlightModal = ({ isNewHighlight, setIsNewHighlight }) => {

  const [input, setInput] = useState("");

  const [nextBtnStyle, setNextBtnStyle] = useState({
    color: "rgb(115,115,115)",
    cursor: "default",
  });

  const containerRef = useRef(null);

  const handleModal = ()=>{
    setIsNewHighlight(!isNewHighlight);
  }

  const handleInput = (e) => {
    setInput(e.target.value);

    if (e.target.value.trim() !== "") {
      setNextBtnStyle({ color: "rgb(0,149,246", cursor: "pointer" });
    } else {
      setNextBtnStyle({ color: "rgb(115,115,115)" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // Prevent submission if input is empty
    setInput("");
  };


  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsNewHighlight(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="createHighlight-modal">
      <div className="createHighlight-modalContainer" ref={containerRef}>
        <div className="nh-modalHeader">
          <h1 className="nh-modalHeader-h1">New Highlight</h1>
          <button
            type="button"
            className="nh-modal-closeButton"
            onClick={handleModal}
          >
            <RiCloseLargeFill size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="newHighligh-form">
          <input
            value={input}
            onChange={handleInput}
            type="text"
            placeholder="Highlight Name"
            className="newHighlight-input"
            spellCheck="true"
            autoComplete="off"
          />

          <button
            type="submit"
            style={nextBtnStyle}
            onClick={handleSubmit}
            className="newHighlight-nextBtn"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHighlightModal;
