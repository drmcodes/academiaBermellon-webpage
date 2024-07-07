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
  margin: 0 auto;
  text-align: center;
  background: var(--blood-red);
`;

const Clases = () => {
  return (
    <Container>
      <Content />
    </Container>
  );
};

export default Clases;
