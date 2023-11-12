import React from "react";
import "./Dashboard.css";
import SectionDashboard from "./SectionDashboard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="title">
        <img src="/static/images/logo.png" alt="loguito" />
        <span className="app-web-name">Matrix Calca</span>
      </div>
      <SectionDashboard />
    </div>
  );
};

export default Dashboard;
