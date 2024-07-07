import ClassCards from "./ClassCards";
import styled from "styled-components";
import Title from "./Title";
import Buttons from "./Buttons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Content = () => {
  return (
    <Container>
      <Title />
      <ClassCards />
      <Buttons />
    </Container>
  );
};

export default Content;
