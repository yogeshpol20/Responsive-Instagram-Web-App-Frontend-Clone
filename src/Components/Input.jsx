import React from "react";
import "../Styles/Components/Input.css";

const Input = ({
  type,
  value,
  onChange,
  borderRadius,
  height,
  width,
  labelColor,
  fontWeight,
  fontSize,
  label,
}) => {
  return (
    <div className="input-container" style={{ width: width }}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="input"
        placeholder=" "
        style={{ borderRadius: borderRadius, height: height }}
      />
      <label
        className="placeholder"
        style={{
          color: labelColor,
          fontWeight: fontWeight,
          fontSize: fontSize,
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
