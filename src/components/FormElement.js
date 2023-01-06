import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Select from "./Select";
import Submit from "./Submit";
import Email from "./Email";
import Date from "./Date";

const FormElement = ({ value: { type, label, name, required, options } }) => {
  switch (type) {
    case "text":
      return <Input />;
    case "email":
      return <Email />;
    case "date":
      return <Date />;
    case "select":
      return <Select />;
    case "checkbox":
      return <Checkbox />;
    case "submit":
      return <Submit />;
    default:
      return null;
  }
};

export default FormElement;
