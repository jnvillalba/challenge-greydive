import formJSON from "../db.json";
import { useState, useEffect } from "react";
import FormElement from "./FormElement";
import appFirebase from "../credenciales";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(appFirebase);

const Home = () => {

//Esquema de la encuesta
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

  //Respuestas de la encuesta
  const [answer, setAnswer] = useState(defaultForm);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAnswer({ ...answer, [name]: value });
  };

  //Envio de respuestas a la db en firebase
  const handleOnSubmit = async (e) => {
    e.preventDefault();
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
};

export default Home;