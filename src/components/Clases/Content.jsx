import "../../App.css";
import ClassCards from "./ClassCards";
import styled from "styled-components";
import Title from "./Title";

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
      <div className="buttons-container">
        <button className="explore-button">Explorar</button>
        <button className="signup-button">Inscríbete</button>
      </div>
      
    </Container>
  );
};

export default Content;
