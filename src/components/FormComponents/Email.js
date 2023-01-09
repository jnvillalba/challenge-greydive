import React from "react";

const Email = ({ label, name, required, handleOnChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <div className="textbox">
        <input
          type="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name={name}
          required={required}
          onChange={handleOnChange}
        />
        <span className="asterix">*</span>
      </div>
    </div>
  );
};

export default Email;
