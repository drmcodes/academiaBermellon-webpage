import styled from "styled-components";

import { useState } from "react";

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
   @media (max-width: 810px) {
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  background-color: var(--night);
  color: var(--white-smoke);
  margin: 20px;
  border: none;
`;

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;

   @media (max-width: 810px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 50px;
    right: 30px;
    background-color: var(--night);
    flex-direction: column;
    width: 200px;
    padding: 10px;
    border-radius: 5px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 810px) {
    display: flex;
    color: var(--white-smoke);
    font-size: 24px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </HamburgerButton>
      <Menu isOpen={isOpen}>
        <Button>Inicio</Button>
        <Button>Sobre nosotros</Button>
        <Button>Servicios</Button>
        <Button>Galería</Button>
      </Menu>
    </Container>
  );
};

export default Navbar;
