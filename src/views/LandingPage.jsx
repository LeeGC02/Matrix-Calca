import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="header" id="inicio">
        <div className="img_logo">
          <img src="../static/images/logo_empresa.png" alt="no furulo we" />
        </div>
        <div className="nav">
          <a className="a" href="#inicio">
            Inicio
          </a>
          <a className="a" href="#proyec-rec">
            Proyectos
          </a>
          <a className="a" href="#foot">
            Contactos
          </a>
          <a className="a" href="/Login">
            Login
          </a>
          <p className="fecha">Jueves 16 Noviembre</p>
        </div>
      </div>
      <div className="mid-content">
        <div className="infoE">
          <h2>#Sobre nosotros</h2>
          <div className="inicio_btn">
            <button>Noticias</button>
            <button>Novedades</button>
          </div>
          <div className="info-empresa">
            <img
              src="../static/images/cons1.jpg"
              alt="no furulo we"
              className="obras"
            />
            <h3>QUIENES SOMOS</h3>
            <p>
              La empresa de construcción civil CANCER fue creada en el año 2015,
              a lo largo de los 8 años la empresa se abrió paso en el mercado de
              la construcción civil, desarrollando proyectos de construcción en
              carreteras, hogares y edificios.
            </p>
            <img src="../static/images/grupo.jpg" alt="" className="people" />
            <h3>NUESTRO OBJETIVO</h3>
            <p>
              El objetivo de la empresa es crecer para convertirse en una
              constructora de renombre capaz de desarrollar y tomar propuestas
              de construcción más complejas, con principios y valores éticos y
              morales.
            </p>
          </div>
        </div>
        <div className="lateral">
          <p className="publi">Publicidad</p>
          <img
            src="../static/images/coca.jpg"
            alt="no furulo we"
            className="coca"
          />
          <h3>Proyectos</h3>
          <div className="proyectos-recientes1" id="proyec-rec">
            <div className="img">
              <img src="../static/images/golden.jpg" alt="" />
            </div>
            <div className="info-proy">
              <div className="proy-tit">
                <p className="tit">Titulo: Salon de eventos golden</p>
                <p className="fech">Fecha: 25/06/2025</p>
              </div>
              <hr />
              <div className="descrip">
                <p>
                  El salón de eventos "Golden" se construirá con un diseño
                  lujoso y elegante, utilizando materiales de alta calidad.
                  Estará listo para albergar diversos eventos, destacando por
                  sus detalles dorados y su ambiente exclusivo.
                </p>
              </div>
            </div>
          </div>
          <div className="proyectos-recientes2">
            <div className="img">
              <img src="../static/images/casa.jpg" alt="" />
            </div>
            <div className="info-proy">
              <div className="proy-tit">
                <p className="tit">Titulo: Casa de dos pisos</p>
                <p className="fech">Fecha: 12/10/2022</p>
              </div>
              <hr />
              <div className="descrip">
                <p>
                  Casa de dos pisos: estructura sólida, diseño funcional,
                  fachada atractiva, interiores eficientes y acogedores.En el
                  interior, los espacios se distribuyen de manera eficiente para
                  satisfacer necesidades cotidianas, creando un hogar acogedor y
                  bien construido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" id="foot">
        <div className="row">
          <div className="contactos">
            <div className="widget">
              <img
                src="../static/images/logo_empresa.png"
                alt="no furulo we"
                className="logop"
              />
              <hr />
              <p className="contactos-text">
                "Somos una empresa constructora con experiencia, calidad y
                prestigio fundada el año 2015 en la ciudad de La Paz Bolivia."
              </p>
            </div>
            <div className="redes_sociales">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/jorge.antonio.33886">
                      <img src="../static/images/facebook.png" alt="Facebook" className="facebook"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/george_ll46/">
                      <img src="../static/images/instagram.png" alt="Instagram"  className="instagram"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jorge-llave-7816b5238/">
                      <img src="../static/images/linkedin.png" alt="Linkedin"  className="linkedin"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="informacion">
            <div className="widget-i">
              <h3 className="titulo">Informacion</h3>
              <ul className="menu">
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#proyec-rec">Proyectos</a>
                </li>
                <li>
                  <a href="/Login">Login</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tel-emp">
            <div className="widget">
              <span>Oficinas de CANCER</span>
              <div className="widget-text">
                <p>
                  <i className="fa-solid fa-location-dot"></i>
                  Zona Obrajes - Av. Ex Costanerita No:1350 - Edificio CANCER
                </p>
                <p>
                  <i class="fa-solid fa-phone"></i>
                  (591-2) 2751168 / (591-2) 2751140
                </p>
                <p>
                <i class="fa-regular fa-envelope"></i>
                  <a href="jorgellave77@gmail.com" className="gmail">cancercns@gmail.com</a>
                </p>
                <p>
                  <i class="fa-regular fa-clock"></i>
                  Lunes - Viernes: 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
