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

  console.log(disabled)

  return (
    <button
      type="submit"
      className="btn btn-primary"
      disabled={disabled}
      onClick={() => showAlert()}
    >
      {label}
    </button>
  );
};

export default Button;
