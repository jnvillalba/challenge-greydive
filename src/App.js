import formJSON from "./db.json";
import { useState, useEffect } from "react";
import FormElement from "./components/FormElement";

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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAnswer({ ...defaultForm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(answer);
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
