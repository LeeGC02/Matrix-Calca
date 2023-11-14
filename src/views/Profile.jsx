import React from "react";
import "./ProyectsView.css";
import Dashboard from "../componentes/Dashboard";
import Information from "../componentes/Information";
import InfoProfile from "../componentes/InfoProfile";

const Profile = () => {
  return (
    <div className="proyects-view-container">
      <div className="container-dash">
        <Dashboard />
      </div>
      <div className="container-info-p">
        <Information titleText={"Anthony's Profile"} />
        <InfoProfile />
      </div>
    </div>
  );
};

export default Profile;
