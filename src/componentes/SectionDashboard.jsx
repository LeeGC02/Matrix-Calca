import React from "react";
import "./SectionDashboard.css";
import { Icon } from "@iconify/react";
const SectionDashboard = () => {
  return (
    <div className="section-container">
      <div className="proyect">
        <div className="icon-span-proyect">
          <Icon
            icon="healthicons:spreadsheets-outline"
            color="#8D99AE"
            width="26"
            height="26"
          />
          <span className="proyect-span">Proyectos</span>
        </div>
        <Icon
          icon="iconamoon:arrow-right-2-thin"
          color="#8D99AE"
          width="26"
          height="26"
        />
      </div>
      <div className="edit">
        <div className="icon-span-edit">
          <Icon
            icon="iconamoon:edit-thin"
            color="#8D99AE"
            width="26"
            height="26"
          />
          <span className="edit-span">Edición</span>
        </div>
        <Icon
          icon="iconamoon:arrow-right-2-thin"
          color="#8D99AE"
          width="26"
          height="26"
        />
      </div>
      <div className="reports">
        <div className="icon-span-reports">
          <Icon icon="iconoir:reports" color="#8D99AE" width="26" height="26" />
          <span className="reports-span">Reportes</span>
        </div>
        <Icon
          icon="iconamoon:arrow-right-2-thin"
          color="#8D99AE"
          width="26"
          height="26"
        />
      </div>
      <div className="tools">
        <div className="icon-span-tools">
          <Icon icon="guidance:tools" color="#8D99AE" width="26" height="26" />
          <span className="tools-span">Herramientas</span>
        </div>
        <Icon
          icon="iconamoon:arrow-right-2-thin"
          color="#8D99AE"
          width="26"
          height="26"
        />
      </div>
      <div className="help">
        <div className="icon-span-help">
          <Icon
            icon="material-symbols-light:help-outline"
            color="#8D99AE"
            width="26"
            height="26"
          />
          <span className="help-span">Ayuda</span>
        </div>
        <Icon
          icon="iconamoon:arrow-right-2-thin"
          color="#8D99AE"
          width="26"
          height="26"
        />
      </div>
      <div className="settings">
        <div className="icon-span-settings">
          <Icon
            icon="iconamoon:settings-thin"
            color="#8D99AE"
            width="26"
            height="26"
          />
          <span className="settings-span">Configuración</span>
        </div>
        <Icon
          icon="iconamoon:arrow-right-2-thin"
          color="#8D99AE"
          width="26"
          height="26"
        />
      </div>
      <div className="icon-span-log-out">
        <Icon
          icon="material-symbols-light:logout"
          color="#ef233c"
          width="26"
          height="26"
        />
        <span className="log-out-span">LogOut</span>
      </div>
    </div>
  );
};

export default SectionDashboard;
