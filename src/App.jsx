import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProyectsView from "./views/ProyectsView";
import Formulario from "./views/Formulario"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Formulario/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
