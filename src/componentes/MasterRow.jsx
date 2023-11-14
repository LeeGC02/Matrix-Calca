import React from "react";
import "./MasterRow.css";

const MasterRow = ({ data }) => {
  return (
    <div className="master-row-container">
      {Object.values(data).map((value, index) => (
        <div className="asco2">
          <span key={index} className={typeof value}>
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MasterRow;
