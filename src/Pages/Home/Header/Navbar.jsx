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
  background-color: var(--white-smoke);
  color: var(--night);
  margin: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: var(--cornell-red);
    color: var(--white-smoke);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
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

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </HamburgerButton>
      <Menu isOpen={isOpen}>
        <Button onClick={() => scrollToSection("hero")}>Inicio</Button>
        <Button>Sobre nosotros</Button>
        <Button>Servicios</Button>
        <Button>Galería</Button>
      </Menu>
    </Container>
  );
};

export default Navbar;
