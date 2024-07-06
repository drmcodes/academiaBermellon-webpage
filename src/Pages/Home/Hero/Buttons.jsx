import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
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
      <Button className="absolute-btn">Explorar</Button>
      <Button className="absolute-btn">Inscribirme</Button>
    </Container>
  );
};

export default Buttons;
