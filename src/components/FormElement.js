import React from "react";
import Checkbox from "./FormComponents/Checkbox";
import Input from "./FormComponents/Input";
import Select from "./FormComponents/Select";
import Submit from "./FormComponents/Submit";
import Email from "./FormComponents/Email";
import Date from "./FormComponents/Date";

const FormElement = ({
  form: { type, label, name, required, options },
  handleOnChange, error
}) => {

  switch (type) {
    case "text":
      return (
        <Input
          label={label}
          name={name}
          required={required}
          handleOnChange={handleOnChange}
        />
      );
    case "email":
      return (
        <Email
          label={label}
          name={name}
          required={required}
          handleOnChange={handleOnChange}
        />
      );
    case "date":
      return (
        <Date
          label={label}
          name={name}
          required={required}
          handleOnChange={handleOnChange}
        />
      );
    case "select":
      return (
        <Select
          label={label}
          name={name}
          required={required}
          options={options}
          handleOnChange={handleOnChange}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          label={label}
          name={name}
          required={required}
          handleOnChange={handleOnChange}
        />
      );
    case "submit":
      return <Submit label={label} disabled={error}/>;
    default:
      return null;
  }
};




export default FormElement;
