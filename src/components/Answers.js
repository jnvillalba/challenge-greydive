import React from "react";
import { useState, useEffect } from "react";
import appFirebase from "../credenciales";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const Answers = () => {
  const db = getFirestore(appFirebase);

  const [answersList, setAnswersList] = useState([]);

  useEffect(() => {
    const getAnswers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "respuestas"));
        console.log(querySnapshot);
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
    <div className="container">
      <div className="card-body">
        {answersList.map((list) => (
          <div key={list.id}>
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
              <strong>País de origen:</strong> {list.country_of_origin}
            </p>
            <p>
              <strong>¿Acepta los términos y condiciones?:</strong>{" "}
              {list.terms_and_conditions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Answers;
