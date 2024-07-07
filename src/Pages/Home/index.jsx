import "../../App.css";
import Hero from "./Hero";
import Card from "../../components/Card";
import Clases from "../../components/Clases/index";
import photo1 from "../../assets/jpgs/photo1.jpg"
import photo2 from "../../assets/jpgs/photo2.jpg"
import photo3 from "../../assets/jpgs/photo3.jpg"
import HeroWave from "../../assets/svgs/wave3.svg"

import styled from "styled-components";

const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-image: url(${HeroWave});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Profesores = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(63, 60, 60);
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;
const Home = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
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
        <Profesores>
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
        </Profesores>
      </div>
    </>
  );
};

export default Home;
