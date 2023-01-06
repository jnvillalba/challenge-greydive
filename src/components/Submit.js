import React from "react";

const Button = ({ label }) => {
  return (
    <button type="submit" className="btn btn-primary">
      {label}
    </button>
  );
};

export default Button;
