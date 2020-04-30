import React, { useState } from "react";
import Styles from "./add-text.module.css";

const settings = {
  maxLength: 50,
};

const AddText = () => {
  // const [getText, setText] = useState("");
  let [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    // let newErrors;

    console.log(value.length);

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
    setErrors({ errors, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={Styles.form}>
      <input
        type="text"
        name="text"
        onChange={handleChange}
        className={Styles.input}
        placeholder="Thought for the day"
        noValidate
      />
      <button type="submit" className="sr-only">
        Submit
      </button>
    </form>
  );
};

export default AddText;
