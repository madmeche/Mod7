import { useState, React } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./Component/Clock";
import { Provider } from "./Component/EmojiContext";
import Emoji from "./Component/Emoji";



function App() {
 
  return (
    <>
      <Provider>
        <Emoji/>
        <Clock />
      </Provider>
    </>
  );
}

export default App;
