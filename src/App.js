import formJSON from "./db.json";
import { useState, useEffect } from "react";
import FormElement from "./components/FormElement";

function App() {
  const [elements, setElement] = useState(null);
  useEffect(() => {
    setElement(formJSON);
  }, []);

  const { items } = elements ?? {};

  return (
    <div className="App container">
      <form>
        {items
          ? items.map((item, i) => <FormElement key={i} value={item} />)
          : null}
      </form>
    </div>
  );
}

export default App;
