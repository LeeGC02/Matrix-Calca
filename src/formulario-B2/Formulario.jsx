import React from "react";

import Dashboard from "../componentes/Dashboard";
import Information from "../componentes/Information";



const Formulario = () => {
  return(
    <div className = "formulario-container">
      <div className = "container-dash">
        <Dashboard />

      </div>
      <div className = "container-info-p">
        <Information />
      </div>
    </div>
  );

};

export default Formulario;
