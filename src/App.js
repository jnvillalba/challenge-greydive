import React from "react";
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Home from "./components/Home";
import Answers from "./components/Answers";
import FinalScreen from "./components/FormComponents/FinalScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/Respuestas" element={<Answers />} />
        <Route exact path="/Final" element={<FinalScreen/>} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
