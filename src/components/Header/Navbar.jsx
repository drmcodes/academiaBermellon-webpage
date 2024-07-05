
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 1em;
  padding: auto;
`;

const Navbar = () => {
  return (
    <Container>
      <p className="nav1-p">Inicio</p>
      <p className="nav1-p">Sobre nosotros</p>
      <p className="nav1-p">Servicios</p>
      <p className="nav1-p">Galería</p>
    </Container>
  );
};

export default Navbar;
