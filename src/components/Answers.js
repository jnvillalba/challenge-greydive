import React from "react";
import { useState, useEffect } from "react";
import appFirebase from "../credenciales";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./Answers.css";

const Answers = () => {
  const db = getFirestore(appFirebase);

  const [answersList, setAnswersList] = useState([]);

  useEffect(() => {
    const getAnswers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "respuestas"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setAnswersList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getAnswers();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Respuestas: {answersList.length}</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="mt-3">
            <ul className="list list-inline">
              {answersList.map((list) => (
                <li className="d-flex justify-content-between" key={list.id}>
                  <div className="d-flex flex-row align-items-center">
                    <div className="ml-2">
                      <p>
                        <strong>Nombre completo: </strong>
                        {list.full_name}
                      </p>
                      <p>
                        <strong>Email:</strong> {list.email}
                      </p>
                      <p>
                        <strong>Fecha de nacimiento:</strong> {list.birth_date}
                      </p>
                      <p>
                        <strong>País de origen:</strong>{" "}
                        {list.country_of_origin}
                      </p>
                      <p>
                        <strong>¿Acepta los términos y condiciones?:</strong>{" "}
                        {list.terms_and_conditions}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
/*
<div className="container">
      <h1>Respuestas: {answersList.length}</h1>
      
      <ul className="card-body">
        {answersList.map((list) => (
          <div key={list.id}>
            <li>
            
            <p>
              <strong>Email:</strong> {list.email}
            </p>
            <p>
              <strong>Fecha de nacimiento:</strong> {list.birth_date}
            </p>
            <p>
              <strong>País de origen:</strong> {list.country_of_origin}
            </p>
            <p>
              <strong>¿Acepta los términos y condiciones?:</strong>{" "}
              {list.terms_and_conditions}
            </p>
            </li>
          </div>
        ))}
      </ul>
    </div>*/
