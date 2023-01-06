import React from "react";

const Select = ({ label, name, required, options, handleOnChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <div className="textbox">
        <select
          className="form-select"
          name={name}
          required={required}
          onChange={handleOnChange}
        >
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
