import React from "react";
import './Input.css'

const Input = ({ label, name, required, handleOnChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        {label}
      </label>
      <div className="textbox">
      <input
        type="text"
        id="exampleInputPassword1"
        name={name}
        required={required}
        onChange={handleOnChange}
        spellCheck ="false"
      />
      <span className="asterix">*</span>
      </div>
    </div>
  );
};

export default Input;
