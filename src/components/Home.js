import formJSON from "../db.json";
import { useState, useEffect } from "react";
import FormElement from "./FormElement";
import appFirebase from "../credenciales";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'

//TODO:   deploy
//TODO: cambiar nombres
const Home = () => {
  const db = getFirestore(appFirebase);

  const navigate = useNavigate()
  const goToFinal = () => navigate('/Final')

  const [elements, setElement] = useState(null);
  const [errorMessage, setErrorMessage] = useState();

  //Esquema de la encuesta
  const defaultForm = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: "",
  };

  //Respuestas de la encuesta
  const [answer, setAnswer] = useState(defaultForm);

  useEffect(() => {
    setElement(formJSON);
    setErrorMessage(validate(answer));
  }, [answer]);

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
    goToFinal()
  };

  const { items } = elements ?? {};
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleOnSubmit}>
          {items
            ? items.map((item, i) => (
                <FormElement
                  key={i}
                  form={item}
                  handleOnChange={handleOnChange}
                  error={errorMessage}
                />
              ))
            : null}
          {errorMessage && <p className="col-sm-10 col-md-10 error">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

const validate = (answer) => {
  if (!answer.full_name) {
    return "Se requiere el nombre completo";
  }
  if (!answer.email) {
    return "Se requiere el email ";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer.email)) {
    return "Email invalido";
  }

  if (!answer.birth_date) {
    return "Se requiere la fecha de nacimiento ";
  }

  if (!answer.country_of_origin) {
    return "Se requiere el país de origen";
  }

  if (answer.terms_and_conditions !== "on") {
    return "Se requiere aceptar los términos y condiciones";
  }
};

export default Home;
