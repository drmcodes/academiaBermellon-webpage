import styled from "styled-components";
import Card from "./Card";
import card1 from "../../assets/jpgs/../jpgs/cards/card1.jpg";
import card2 from "../../assets/jpgs/../jpgs/cards/card2.jpg";
import card3 from "../../assets/jpgs/../jpgs/cards/card3.jpg";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  width:100%;
`;

const ClassCards = () => {
  return (
    <Container>
      <Card
        img={card1}
        title={"Técnicas de dibujo y bellas artes"}
        content={
          "Ofrecemos un enfoque integral para el aprendizaje de diversas técnicas de dibujo y bellas artes, desde los fundamentos básicos hasta técnicas avanzadas, ideal para todos los niveles de habilidad."
        }
      />
      <Card
        img={card2}
        title={"Clases personalizadas y flexibles"}
        content={
          "Nuestras clases están diseñadas para adaptarse a tus necesidades y horarios, proporcionando una experiencia de aprendizaje personalizada que se ajusta a tu ritmo y objetivos artísticos."
        }
      />
      <Card
        img={card3}
        title={"Exposiciones y eventos artísticos"}
        content={
          "Participa en nuestras exposiciones y eventos artísticos para mostrar tu trabajo, conectarte con otros artistas y disfrutar de un entorno inspirador y creativo."
        }
      />
      <Card
        img={card1}
        title={"Talleres y Escuela de verano"}
        content={
          "Únete a nuestros talleres y programas de escuela de verano, donde ofrecemos actividades intensivas y divertidas que te ayudarán a desarrollar tus habilidades artísticas mientras disfrutas de un ambiente veraniego y colaborativo."
        }
      />
    </Container>
  );
};

export default ClassCards;
