import React from "react";
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Form from "./components/Form";
import Answers from "./components/Answers";
import FinalScreen from "./components/FinalScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Form />} />
        <Route exact path="/Respuestas" element={<Answers />} />
        <Route exact path="/Final" element={<FinalScreen/>} />
        <Route exact path="*" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
