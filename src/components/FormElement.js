import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Select from "./Select";
import Submit from "./Submit";
import Email from "./Email";
import Date from "./Date";

const FormElement = ({
  form: { type, label, name, required, options },
  handleOnChange,
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
      return <Submit label={label} />;
    default:
      return null;
  }
};

export default FormElement;
