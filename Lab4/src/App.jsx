import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes} from "react-router-dom";
import BasicCard from "./Component/Card";
import BasicTextFields from "./Component/CreateForm";
import LandingPage from "./Component/LandingPage";
import ResponsiveAppBar from "./Component/NavBar";
import CreateForm from "../src/Component/CreateForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<CreateForm />} />
        <Route path='/post' element={<BasicCard />} />
      </Routes>
      <ResponsiveAppBar />
      {/* <BasicCard />
      <BasicTextFields /> */}
    </>
  );
}

export default App;
