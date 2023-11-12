import React from "react";
import Table from "./Table";
import "./Proyects.css";

const Proyects = () => {
  return (
    <div className="proyect-container">
      <div className="title-p">
        <span className="Title-proyects">Proyectos</span>
      </div>
      <div className="table-cont">
        <Table />
      </div>
    </div>
  );
};

export default Proyects;
