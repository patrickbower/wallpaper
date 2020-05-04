import React, { useContext } from "react";
import TextContext from "../../context/TextContext";
import Styles from "./artboard.module.css";

const Artboard = () => {
  const [textContext] = useContext(TextContext);
  return (
    <div className={Styles.artboard}>
      <div className={Styles.textWrap}>
        <h1 className={Styles.heading}>{textContext}</h1>
        <span className={Styles.halftone}>{textContext}</span>
      </div>
    </div>
  );
};

export default Artboard;
