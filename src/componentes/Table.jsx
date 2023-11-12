import React from "react";
import "./Table.css";
import dataProyects from "../assets/dataProyect.json";
import RowHeader from "./RowHeader";
import Rows from "./Rows";

const Table = () => {
  return (
    <div className="table-container">
      <RowHeader />
      {dataProyects.map((dataProyect) => {
        return (
          <Rows
            number={dataProyect.id}
            nameProyect={dataProyect.nombreProyecto}
            date={dataProyect.fecha}
            hour={dataProyect.Hora}
            size={dataProyect.Tamaño}
            key={dataProyect.id}
          />
        );
      })}
    </div>
  );
};

export default Table;
