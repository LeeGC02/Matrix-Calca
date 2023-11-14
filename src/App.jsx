import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProyectsView from "./views/ProyectsView";
<<<<<<< HEAD
import Formulario from "./views/Formulario"
=======
import Login from "./views/Login";
>>>>>>> f067e9060d15233b001b994ea0d1b25a4771e088

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Formulario/>} />
=======
          <Route path="/" element={<Login/>} />
          <Route path="/Dashborad" element={<ProyectsView/>} />
>>>>>>> f067e9060d15233b001b994ea0d1b25a4771e088
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
