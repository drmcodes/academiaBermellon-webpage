import styled from "styled-components";
import Buttons from "./Buttons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center; /* Centra el contenido horizontalmente */
  width: 50%;
  height: 100%; /* Para ocupar todo el alto del contenedor */
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin:20px;
  font-size: 2.5em;
  color: var(--white);
  @media (max-width: 800px) {
    font-size: 2em;
  }
`;
const Description = styled.p`
  color: var(--white-smoke);
  font-size: 1.5rem;
  margin: 20px;
`;

const HeroInfo = () => {
  return (
    <Container>
      <Title>
        Formando artistas de todas las edades en técnicas de dibujo y bellas
        artes
      </Title>
      <Description>
        Descubre tu pasión por el arte y desarrolla tu talento con nosotros
      </Description>
      <Buttons />
    </Container>
  );
};

export default HeroInfo;
