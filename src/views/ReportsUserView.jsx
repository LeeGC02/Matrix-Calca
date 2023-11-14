import React from "react";
import "./ReportsUserView.css";
import Dashboard from "../componentes/Dashboard";
import Information from "../componentes/Information";
import MasterContainer from "../componentes/MasterContainer";
import dataForTable1 from "../assets/masterPrueba.json";
import dataForTable2 from "../assets/dataProyect.json";

const ReportsUserView = () => {
  return (
    <div className="master-view-container">
      <div className="master-container-dash">
        <Dashboard />
      </div>
      <div className="master-container-info-p">
        <Information titleText={"Nombre del proyecto..."} />
        <MasterContainer
          titleProyect={"Nombre de la actividad"}
          dataProyects={dataForTable1}
        />
      </div>
    </div>
  );
};

export default ReportsUserView;
