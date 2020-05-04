import React, { useState, useContext } from "react";
import TextContext from "../../context/TextContext";
import Styles from "./add-text.module.css";

const settings = {
  maxLength: 50,
};

const AddText = () => {
  const [textContext, setTextContext] = useContext(TextContext);
  let [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    // validation
    switch (name) {
      case "text":
        // char max length
        errors =
          value.length > settings.maxLength ? "Max length exceeded" : false;
        break;
      default:
        break;
    }
    setErrors({ errors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.info(errors);
    // console.log(event.target.text.value);
    setTextContext(event.target.text.value);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={Styles.form}>
      <input
        type="text"
        name="text"
        onChange={handleChange}
        className={Styles.input}
        placeholder={textContext}
        noValidate
        autoFocus
      />
      <button type="submit" className="sr-only">
        Submit
      </button>
    </form>
  );
};

export default AddText;
