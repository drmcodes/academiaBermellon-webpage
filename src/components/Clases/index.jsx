import Content from "./Content";
import styled from "styled-components";
import wave from "../../assets/svgs/wave2.svg"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /* Mantiene el flujo en columna para los elementos principales */
  justify-content: center;
  align-items: center; /* Centra el contenido horizontalmente */
  width: 100%;
  height:100%;
  margin: 0 auto;
  text-align: center;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  
`;

const Clases = () => {
  return (
    <Container>
      <Content />
    </Container>
  );
};

export default Clases;
