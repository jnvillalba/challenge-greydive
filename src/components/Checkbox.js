import React from "react";

const Checkbox = ({ label, name, required, handleOnChange }) => {
  return (
    <div className="mb-3 form-check">
      <label className="form-check-label" htmlFor="exampleCheck1">
        {label}
      </label>

      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        name={name}
        required={required}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Checkbox;
