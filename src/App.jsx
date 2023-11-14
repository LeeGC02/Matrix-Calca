import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProyectsView from "./views/ProyectsView";
import Profile from "./views/Profile";
import ReportsUserView from "./views/ReportsUserView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProyectsView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reportsUser" element={<ReportsUserView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
