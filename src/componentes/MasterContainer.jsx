import React from "react";
import "./MasterContainer.css";
import MasterTable from "./MasterTable";
const MasterContainer = ({ titleProyect, dataProyects }) => {
  return (
    <div>
      <div className="master-container">
        <div className="title-r">
          <span className="Title-master">{titleProyect}</span>
        </div>
        <div className="master-table-cont">
          <MasterTable dataProyects={dataProyects} />
        </div>
      </div>
    </div>
  );
};

export default MasterContainer;
