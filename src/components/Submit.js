import React from "react";
import Swal from 'sweetalert2'

const Button = ({ label }) => {

  const showAlert = () => {
    Swal.fire({
      icon: 'success',
      title: "Respuestas Enviadas",
      footer: '<a href="/Respuestas">Ver respuestas</a>'
    })
  }

  return (
    <button type="submit" className="btn btn-primary"
    onClick={() => showAlert()}>
      {label}
    </button>
  );
};

export default Button;
