import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProyectsView from "./views/ProyectsView";
import Formulario from "./views/Formulario"
import Login from "./views/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Dashborad" element={<ProyectsView/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
