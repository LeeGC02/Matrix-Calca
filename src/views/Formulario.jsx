import React from "react";

import "./Formulario.css"
import Dashboard from "../componentes/Dashboard";
import Information from "../componentes/Information";



const Formulario = () => {
  return(
    <div className = "formulario-container">
      <div className = "container-dash">
        <Dashboard />

      </div>
      <div className = "container-table">
        <Information />
        
      </div>
    </div>
  );

};

export default Formulario;
