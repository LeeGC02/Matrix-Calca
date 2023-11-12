import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProyectsView from "./views/ProyectsView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProyectsView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
