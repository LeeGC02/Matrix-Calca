import React from "react";
import "./InfoProfile.css";

const InfoProfile = () => {
  return (
    <div className="info-profile-container">
      <div className="title-inf-prof-container">
        <span className="inf-p-title">Información del Perfíl</span>
        <hr className="line" />
      </div>

      <div className="n-container">
        <div className="name-p-container">
          <span className="name-p">Nombres</span>
          <input type="text" className="text-name" />
        </div>
        <div className="name-p-container">
          <span className="name-p">Apellidos</span>
          <input type="text" className="text-name" />
        </div>
      </div>

      <div className="e-container">
        <div className="name-p-container">
          <span className="name-p">Cargo Empresarial</span>
          <input type="text" className="text-name" />
        </div>
        <div className="name-p-container">
          <span className="name-p">Email</span>
          <input type="text" className="text-name" />
        </div>
      </div>

      <div className="about-p-container">
        <span className="about-p">Acerca de mi:</span>
        <div className="text-about" contentEditable="true"></div>
      </div>
      <div className="btn-container">
        <div className="btn-cancel-container">
          <button className="btn-cancel">Cancelar</button>
        </div>
        <div className="btn-save-container">
          <button className="btn-save">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default InfoProfile;
