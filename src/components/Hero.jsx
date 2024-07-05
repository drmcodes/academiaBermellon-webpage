import React from "react";
import "../App.css";
import video from "../img/hero-video.webm";
import Card from "../Card";
import Clases from "../components/Clases.jsx";
import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/photo3.jpg";
import logo from "../img/logo.png";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="nav1">
            <img src={logo} alt="" />
          </div>
          <div className="nav2">
            <p className="nav1-p">Inicio</p>
            <p className="nav1-p">Sobre nosotros</p>
            <p className="nav1-p">Servicios</p>
            <p className="nav1-p">Galería</p>
          </div>
        </div>
        <section className="hero">
          <div className="hero-video">
            <video src={video} autoPlay loop muted></video>
            <div className="absolute-div">
              <h1 className="absolute-h1">
                Formando artistas de todas las edades en técnicas de dibujo y
                bellas artes
              </h1>
              <p className="absolute-p">
                Descubre tu pasión por el arte y desarrolla tu talento con
                nosotros
              </p>
              <div className="boton">
              <button className="absolute-btn">Explorar</button>
              <button className="absolute-btn">Inscribirme</button>   
              </div>
             
            </div>
          </div>
        </section>
      </div>
      <div className="div-clases">
        <Clases />
      </div>
      <div className="div-teachers">
        <div className="div-header">
          <h1 className="teacher-h1">Nuestros profesores</h1>
          <p>
            Conoce a nuestros profesores, expertos en todos los campos de la
            pintura y las bellas artes. Su dedicación y habilidades en la
            enseñanza han inspirado a generaciones de estudiantes a explorar y
            desarrollar su propio estilo artístico.
          </p>
        </div>
        <div className="div-card">
          <Card
            image={photo1}
            title="Luisa"
            description="Conoce a nuestro profesor principal, experto en técnicas avanzadas de pintura y bellas artes. Su dedicación y pasión por enseñar han inspirado a numerosos estudiantes a lo largo de los años."
          />
          <Card
            image={photo2}
            title="Gonzalo"
            description="Nuestro segundo profesor es un artista consumado con una vasta experiencia en diversos estilos artísticos. Su enfoque práctico y su habilidad para transmitir conocimiento hacen de él un recurso invaluable para nuestros estudiantes."
          />
          <Card
            image={photo3}
            title="Julio"
            description="Descubre a nuestro tercer profesor, especializado en teoría del color y composición artística. Su comprensión profunda de los fundamentos del arte complementa su habilidad para motivar a los estudiantes a alcanzar nuevas alturas en su creatividad."
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
