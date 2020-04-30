import React, {useState} from "react";
import AddText from "./components/add-text";
import TextContext from './context/TextContext';
import "./App.css";

function App() {
  const textHook = useState("Today Matthew, I'm going to be...");
  return (
    <TextContext.Provider value={textHook}>
      <React.Fragment>
        <AddText />
      </React.Fragment>
    </TextContext.Provider>
  );
}

export default App;
