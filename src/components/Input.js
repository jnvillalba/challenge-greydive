import React from "react";

const Input = ({ label, name, required, handleOnChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputPassword1"
        name={name}
        required={required}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
