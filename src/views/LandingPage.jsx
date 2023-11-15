import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="header">
        <div className="img_logo">
          <img src="../static/images/logo_empresa.png" alt="no furulo we" />
        </div>
        <div className="nav">
          <a className="a" href="">
            Inicio
          </a>
          <a className="a" href="">
            Proyectos
          </a>
          <a className="a" href="">
            Inversores
          </a>
          <a className="a" href="">
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
            <img src="../static/images/cons1.jpg" alt="no furulo we" className="obras" />
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
          <img src="../static/images/coca.jpg" alt="no furulo we" className="coca" />
          <div className="proyectos-recientes">
            <div className="img">
              <img src="../static/images/golden.jpg" alt="" />
            </div>
            <div className="info-proy">
              <div className="proy-tit">
                <p className="tit">Titulo: Salon de eventos golden</p>
                <p className="fech">Fecha: 12/10/2022</p>
              </div>
              <div className="descrip">
                <p>El salón de eventos "Golden" se construirá con un diseño lujoso y elegante, utilizando materiales de alta calidad. Estará listo para albergar diversos eventos, destacando por sus detalles dorados y su ambiente exclusivo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="redes_sociales">
          <a href="#">
            <img src="" alt="Facebook" />
          </a>
          <a href="#">
            <img src="" alt="Instagram" />
          </a>
          <a href="#">
            <img src="" alt="Linkedin" />
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
