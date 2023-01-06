import formJSON from "./db.json";
import { useState, useEffect } from "react";
import FormElement from "./components/FormElement";
import appFirebase from "./credenciales";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const db = getFirestore(appFirebase);

//TODO: add db firebase, router-dom

function App() {
  const [elements, setElement] = useState(null);
  useEffect(() => {
    setElement(formJSON);
  }, []);

  const defaultForm = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: "",
  };

  const [answer, setAnswer] = useState(defaultForm);
  const [answersList, setAnswersList] = useState([]);

  useEffect(() => {
    const getAnswers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "respuestas"));
        console.log(querySnapshot)
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id });
        });
        
        setAnswersList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getAnswers();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAnswer({ ...answer, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(answer);
    try {
      await addDoc(collection(db, "respuestas"), {
        ...answer,
      });
    } catch (error) {
      console.log(error);
    }
    setAnswer({ ...defaultForm });
  };

  const { items } = elements ?? {};
  return (
    <div className="App container">
      <form onSubmit={handleOnSubmit}>
        {items
          ? items.map((item, i) => (
              <FormElement
                key={i}
                form={item}
                handleOnChange={handleOnChange}
              />
            ))
          : null}
      </form>
      <div className="container">
      <div className="card-body">
        {answersList.map((list) => (
          <div key={list.id}>
            <p>Nombre completo: {list.full_name}</p>
            <p>Email: {list.email}</p>
            <p>Fecha de nacimiento: {list.birth_date}</p>
            <p>País de origen: {list.country_of_origin}</p>
            <p>
              ¿Acepta los términos y condiciones?: {list.terms_and_conditions}
            </p>
          </div>
        ))}
      </div></div>
    </div>
  );
}

export default App;
