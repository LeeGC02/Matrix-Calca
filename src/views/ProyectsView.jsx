import React from "react";
import "./ProyectsView.css";
import Dashboard from "../componentes/Dashboard";
import Information from "../componentes/Information";
import Proyects from "../componentes/Proyects";

const ProyectsView = () => {
  return (
    <div className="proyects-view-container">
      <div className="container-dash">
        <Dashboard />
      </div>
      <div className="container-info-p">
        <Information titleText={"Welcome Back, Anthony"} />
        <Proyects />
      </div>
    </div>
  );
};

export default ProyectsView;
