import React from "react";
import Table from "./Table";
import "./Proyects.css";

const Proyects = ({title}) => {
  return (
    <div className="proyect-container">
      <div className="title-p">
        <span className="Title-proyects">{title}</span>
      </div>
      <div className="table-cont">
        <Table />
      </div>
    </div>
  );
};

export default Proyects;
