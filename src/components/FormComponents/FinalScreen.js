import React from "react";

function FinalScreen() {
  return (
    <div className="card">
      <h3>
        Las respuestas fueron enviadas
      </h3> <div className="inputbox"></div>
      <div className="inputbox">
        <p> Muchas gracias por tomarse el tiempo para completar la encuesta!</p>
      </div>
      <div className="link">
        <a href="/Respuestas">Ver respuestas</a>
      </div>
    </div>
  );
}

export default FinalScreen;

/*
<div className="card">
      <h2 className="subscribe__title">Las respuestas fueron enviadas</h2>
      <p className="subscribe__copy">
        Muchas gracias por tomarse el tiempo para completar la encuesta!
      </p>
      <div >
        <a href="/Respuestas">Ver respuestas</a>
      </div>
    </div>

*/
