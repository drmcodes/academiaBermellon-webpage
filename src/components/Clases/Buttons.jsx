import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  margin: 20px;
  display: flex;
  margin-top: 20px;
  gap:10px;
`;

const Button = styled.button`
  padding: 20px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: var(--imperial-red);
  color: var(--white);
  font-weight: 700;
`;
const Buttons = () => {
  return (
    <Container>
      <Button>Explorar</Button>
      <Button>Inscríbete</Button>
    </Container>
  );
};

export default Buttons;
