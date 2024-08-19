import React from "react";
import "../Styles/Components/Button.css";

const Button = ({ onClick, type, style, onMouseOver, onMouseOut, name }) => {
  return (
    <div className="button-container">
      <button
        className="button"
        onClick={onClick}
        type={type}
        style={style}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {name}
      </button>
     </div>
  );
};

export default Button;
