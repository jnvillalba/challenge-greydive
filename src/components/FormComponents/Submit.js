import React from "react";
import Swal from "sweetalert2";

const Button = ({ label, disabled }) => {
  const showAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Respuestas Enviadas",
      footer: '<a href="/Respuestas">Ver respuestas</a>',
    });
  };


  return (
    <div>
      
      <button
        type="submit"
        className="btn"
        disabled={disabled}
        onClick={() => showAlert()}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
