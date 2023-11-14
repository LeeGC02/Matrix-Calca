import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProyectsView from "./views/ProyectsView";
import Login from "./views/Login";
import Profile from "./views/Profile";
import ReportsUserView from "./views/ReportsUserView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashborad" element={<ProyectsView />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ReportUser" element={<ReportsUserView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
