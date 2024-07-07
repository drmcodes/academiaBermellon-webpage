import styled from "styled-components";
import Title from "./Title";
import Profesorado from "./Profesorado";

const Container = styled.div`
  background-color: var(--night);
  color: #c44949;
  display: flex;

  flex-direction: column;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Teachers = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title />
          <Profesorado />
        </Wrapper>
      </Container>
    </>
  );
};

export default Teachers;
