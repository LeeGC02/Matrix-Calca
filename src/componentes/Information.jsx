import React from "react";
import { Icon } from "@iconify/react";
import "./Information.css";

const Information = ({ titleText }) => {
  return (
    <div className="info-container">
      <div className="welcome-container">
        <span className="people-name">{titleText}</span>
      </div>
      <div className="info-name-container">
        <div className="icons-container">
          <Icon
            icon="material-symbols-light:search"
            color="#2b2d42"
            width="26"
            height="26"
          />
          <Icon
            icon="iconamoon:notification-thin"
            color="#2b2d42"
            width="26"
            height="26"
          />
        </div>
        <div className="info-person">
          <div className="img-name-container">
            <img src="/static/images/person.png" alt="foto" />
            <span className="name">Anthony</span>
          </div>
          <Icon
            icon="iconamoon:arrow-down-2-thin"
            color="#2b2d42"
            width="26"
            height="26"
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
