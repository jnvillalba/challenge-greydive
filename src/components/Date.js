import React from "react";

const Date = ({ label, name, required, handleOnChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        {label}
      </label>
      <input
        type="date"
        className="form-control"
        id="exampleInputPassword1"
        name={name}
        required={required}
        onChange={handleOnChange}
      />
    </div>
  );
};
export default Date;
