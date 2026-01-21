import styled from "styled-components";
import { useState, useEffect } from "react";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.2rem 0;
  transition: var(--transition-medium);
  background: ${({ scrolled }) =>
    scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${({ scrolled }) =>
    scrolled ? 'var(--border-subtle)' : 'transparent'};
`;

const Nav = styled.nav`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  transition: var(--transition-fast);

  svg {
    color: var(--text-primary);
    transition: var(--transition-fast);
  }

  span {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.3rem, 2vw, 1.5rem);
    font-weight: 500;
    color: var(--text-primary);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    transition: var(--transition-fast);
  }

  &:hover svg,
  &:hover span {
    color: var(--accent-primary);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;

  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    right: 0;
    width: min(300px, 80vw);
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    transform: translateX(${({ isOpen }) => isOpen ? '0' : '100%'});
    transition: var(--transition-medium);
    border-left: 1px solid var(--border-subtle);
  }
`;

const NavLink = styled.li`
  a {
    font-family: 'Lato', sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-secondary);
    position: relative;
    padding: 0.5rem 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--accent-primary);
      transition: var(--transition-fast);
    }

    &:hover {
      color: var(--accent-primary);

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 968px) {
    a {
      font-size: 1rem;
      letter-spacing: 0.2em;
    }
  }
`;

const ContactButton = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--bg-primary);
  background: var(--accent-primary);
  padding: 0.8rem 1.8rem;
  border: 1px solid var(--accent-primary);
  cursor: pointer;
  transition: var(--transition-fast);

  &:hover {
    background: transparent;
    color: var(--accent-primary);
  }

  @media (max-width: 968px) {
    margin-top: 1rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  cursor: pointer;
  z-index: 1001;
  padding: 10px;

  span {
    display: block;
    width: 25px;
    height: 1.5px;
    background: var(--accent-primary);
    transition: var(--transition-fast);
    transform-origin: center;
  }

  ${({ isOpen }) => isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  `}

  @media (max-width: 968px) {
    display: flex;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: var(--transition-medium);
    z-index: 999;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Nosotros', id: 'about' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Servicios', id: 'services' },
    { label: 'Artistas', id: 'artists' },
    { label: 'Talleres', id: 'workshops' },
  ];

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo onClick={() => scrollToSection('hero')}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M20 8 L20 32" stroke="var(--accent-primary)" strokeWidth="1.5"/>
            <path d="M12 16 L20 8 L28 16" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none"/>
            <circle cx="20" cy="24" r="4" fill="var(--accent-primary)"/>
          </svg>
          <span>Atelier</span>
        </Logo>

        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </HamburgerButton>

        <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavLink key={item.id}>
              <a onClick={() => scrollToSection(item.id)}>{item.label}</a>
            </NavLink>
          ))}
          <ContactButton onClick={() => scrollToSection('contact')}>
            Contacto
          </ContactButton>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
