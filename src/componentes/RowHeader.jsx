import React from "react";
import "./RowHeader.css";

const RowHeader = () => {
  return (
    <div className="row-header-container">
      <div className="num-name-header">
        <span className="number">No</span>
        <span className="name-p">Nombre del proyecto</span>
      </div>

      <div className="inf-header">
        <span className="date">Fecha</span>
        <span className="hour">Hora</span>
        <span className="size">Tamaño</span>
      </div>
    </div>
  );
};

export default RowHeader;
