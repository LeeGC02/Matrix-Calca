import React from "react";
import "./Rows.css";

const Rows = ({ number, nameProyect, date, hour, size }) => {
  return (
    <div className="row-container">
      <div className="num-name-cont">
        <span className="number">{number}</span>
        <span className="nameProyect">{nameProyect}</span>
      </div>

      <div className="inf-archiv">
        <span className="date">{date}</span>
        <span className="hour">{hour}</span>
        <span className="size">{size}</span>
      </div>
    </div>
  );
};

export default Rows;
