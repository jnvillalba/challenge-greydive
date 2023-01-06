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
  deleteDoc,
  getDoc,
  setDoc,
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
  const [answerList, setAnswerList] = useState([]);


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
    </div>
  );
}

export default App;
