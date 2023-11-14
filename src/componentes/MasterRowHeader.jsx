import React from "react";
import "./MasterRowHeader.css";
const MasterRowHeader = ({ columnNames }) => {
  return (
    <div className="master-row-header-container">
      {columnNames.map((columnName, index) => (
        <div className="asco">
          <span key={index} className={columnName.toLowerCase()}>
            {columnName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MasterRowHeader;
