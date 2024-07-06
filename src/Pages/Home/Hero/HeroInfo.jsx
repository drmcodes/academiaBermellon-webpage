import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center; /* Centra el contenido horizontalmente */
  width: 50%;
  margin: 20px;
  height: 100%; /* Para ocupar todo el alto del contenedor */
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: var(--white);
   @media (max-width: 800px) {
    font-size: 2em;
  }
`;
const Description = styled.p`
  color: var(--white-smoke);
  font-size: 1.5rem;
`;

const Box = styled.div`
  display: flex;
  gap: 10px;  
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
      <Box>
        <button className="absolute-btn">Explorar</button>
        <button className="absolute-btn">Inscribirme</button>
      </Box>
    </Container>
  );
};

export default HeroInfo;
