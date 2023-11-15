import React, { useState, useEffect } from 'react';
import './login.css';
import { loginOk } from '../services/PostGet'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //login bdi
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
//  const [loginData, setLoginData] = useState(null);
  /*  
  useEffect(() => {
    const credentials = {
        usuario: usuario,
        contrasena: contrasena,
    };
    
    loginOk(credentials).then((data) => {setLoginData(data)}) 
  }, []);
  */
const handleLogin = async () => {
    try {
      const contrasenaIngresada = document.getElementById("password").value;
      const usuarioIngresado = document.getElementById("username").value;
      setUsuario(usuarioIngresado);
      setContrasena(contrasenaIngresada);
      const credentials = {
         usuario: usuario,
         contrasena: contrasena,
      };
    
      const autenticacionExitosa = await loginOk(credentials);
      console.log(autenticacionExitosa);      
      if (autenticacionExitosa) {
        // Hacer algo después de una autenticación exitosa
        console.log('Autenticación exitosa');
        window.location.href = "http://localhost:5173/dashborad";
      } else {
        // Hacer algo después de una autenticación fallida
        console.log('Autenticación fallida');
      }
    } catch (error) {
      // Manejar errores de red o de la función loginOk
      console.error('Error al iniciar sesión:', error.message);
    }
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
          <button onClick={handleLogin}>Login</button>
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
