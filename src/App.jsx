import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProyectsView from "./views/ProyectsView";
import Formulario from "./views/Formulario"
import Login from "./views/Login";
import Profile from "./views/Profile";
import LandingPage from "./views/LandingPage";
import ReportsUserView from "./views/ReportsUserView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashborad" element={<ProyectsView />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ReportUser" element={<ReportsUserView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
