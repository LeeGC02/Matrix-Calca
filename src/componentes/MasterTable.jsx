import React from "react";
import "./MasterTable.css";
import MasterRowHeader from "./MasterRowHeader";
import MasterRow from "./MasterRow";

const MasterTable = ({ dataProyects }) => {
  if (!dataProyects || dataProyects.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  const columnNames = Object.keys(dataProyects[0]);

  return (
    <div className="table-p-container">
      <MasterRowHeader columnNames={columnNames} />
      {dataProyects.map((dataProyect) => (
        <MasterRow data={dataProyect} key={dataProyect.id} />
      ))}
    </div>
  );
};

export default MasterTable;
