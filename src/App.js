import React, {useState} from "react";
import TextContext from './context/TextContext';

import "./App.css";

import AddText from "./components/add-text";
import Artboard from "./components/art-board"
import ScreenGrab from './components/screen-grab'


function App() {
  const textHook = useState("One for the money and two for the show");
  return (
    <TextContext.Provider value={textHook}>
      <React.Fragment>
        <AddText />
        <Artboard />
        <ScreenGrab/>
      </React.Fragment>
    </TextContext.Provider>
  );
}

export default App;
