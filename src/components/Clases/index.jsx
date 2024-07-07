import Content from "./Content";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url(/assets/svgs/wave2.svg);
  background-position: center;
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
