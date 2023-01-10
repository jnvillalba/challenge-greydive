import React from "react";
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";

const Button = ({ label, disabled }) => {
  const navigate = useNavigate();
  const goToAnswers = () => navigate("/Respuestas");
  const showAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Respuestas Enviadas",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ver respuestas",
    }).then(function () {
      goToAnswers();
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
