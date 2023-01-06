import React from "react";

const Checkbox = ({ label, name, required, handleOnChange }) => {
  return (
    <div className="mb-3">
      <label id="check1label"className="form-check-label" htmlFor="check1">
        {label}
        <input
        type="checkbox"
        className="checkbox"
        id="check1"
        name={name}
        required={required}
        onChange={handleOnChange}
      /><span className='checkbox'> </span>
      </label>

      
    </div>
  );
};

export default Checkbox;
