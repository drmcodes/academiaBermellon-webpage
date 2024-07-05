import React from "react";
import "../App.css";
import card1 from "../img/card1.jpg";
import card2 from "../img/card2.jpg";
import card3 from "../img/card3.jpg";

const Clases = () => {
  return (
    <div className="clases-container">
      <h2>Descubre</h2>
      <h1>Aprende a dibujar y crear bellas obras de arte</h1>
      <p>
        En nuestra academia de dibujo y bellas artes, te enseñaremos una
        variedad de técnicas para que puedas expresar tu creatividad y
        desarrollar tus habilidades artísticas. Ya sea que seas principiante o
        tengas experiencia, nuestros expertos instructores te guiarán en tu
        camino artístico.
      </p>
      <div className="cards-container">
        <div className="card2">
          <div className="card-image2">
          <img src={card1} alt="" />
          </div>
          <h3>Técnicas de dibujo y bellas artes</h3>
          <p>
            Aprende a utilizar diferentes materiales y herramientas de dibujo,
            como lápices, carboncillos y acuarelas, para crear obras de arte
            impresionantes.
          </p>
        </div>
        <div className="card2">
          <div className="card-image2">
            <img src={card2} alt="" />
          </div>

          <h3>Clases personalizadas y flexibles</h3>
          <p>
            Adaptamos nuestras clases a tus necesidades y nivel de habilidad,
            para que puedas aprender a tu propio ritmo y alcanzar tus metas
            artísticas.
          </p>
        </div>
        <div className="card2">
          <div className="card-image2">
          <img src={card3} alt="" />
          </div>
          <h3>Exposiciones y eventos artísticos</h3>
          <p>
            Participa en nuestras exposiciones y eventos artísticos para mostrar
            tus obras y conectarte con otros artistas.
          </p>
        </div>
      </div>
      <div className="buttons-container">
        <button className="explore-button">Explorar</button>
        <button className="signup-button">Inscríbete</button>
      </div>
    </div>
  );
};

export default Clases;
