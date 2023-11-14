import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const simularLogin = () => {
    const usuarioIngresado = document.getElementById("username").value;
    const contrasenaIngresada = document.getElementById("password").value;

    // Verifica las credenciales
    if (usuarioIngresado === "jorge" && contrasenaIngresada === "vino1111") {
      window.location.href = "http://localhost:5173/dashborad"; 
    } else {
      // Credenciales incorrectas, realiza alguna acción o muestra un mensaje de error
      alert("usuario o contraseña incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="view">
      <div className="container-login">
        <div className="login-text">
          <h1>Login</h1>
        </div>
        <div className="inputs-login">
          <input
            type="text"
            id="username"
            className="user-name"
            placeholder="Username:"
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="pass-word"
              placeholder="Password:"
            />
            <button
              className="toggle-password"
              onClick={togglePasswordVisibility}
              tabIndex="-1"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>
        <div className="button-login">
          <button onClick={simularLogin}>Login</button>
        </div>
      </div>
      <div className="draw-container">
        <img
          src="../static/images/draw.png"
          className="draw"
          alt="no furulo we"
        />
      </div>
    </div>
  );
};

export default Login;
