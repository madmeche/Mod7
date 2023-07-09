import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./Component/Lab2/src/Clock";
import DisplayEmojiContext from "./Component/Lab2/src/EmojiContext";
// import ClockDisplay from './Component/Lab1/ClockDisplay'
// import ActivityFinder from './Component/ActivityFinder'
// import RefCounter from './Component/RefCounter'
// import BitcoinRates from './Component/Lab1/BitcoinRates'
// import Emoji from "./Component/Lab2/src/Emoji";

function App() {
  //   const [count, setCount] = useState(0)


  return (
    <>
        <div>
         
        </div>

        <br />
        <div>{/* <Calculator /> */}</div>
        <br />

        <div>
          <Clock /> 
          {/* <DisplayEmojiContext /> */}
        </div>
      {/* <ClockDisplay/> */}
      {/* <ActivityFinder/> */}
      {/* <RefCounter/> */}
      {/* <BitcoinRates/> */}
      {/* <App/> */}
    </>
  );
}

export default App;
