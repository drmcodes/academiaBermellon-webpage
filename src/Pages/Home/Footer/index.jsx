import styled from "styled-components";

const FooterSection = styled.footer`
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-subtle), transparent);
  }
`;

const MainFooter = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--section-padding) var(--container-padding);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const BrandColumn = styled.div``;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;

  svg {
    color: var(--text-primary);
  }

  span {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-primary);
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
`;

const BrandDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-size: 0.85rem;
  transition: var(--transition-fast);

  &:hover {
    border-color: var(--accent-primary);
    color: var(--accent-primary);
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-primary);
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;

  a {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: var(--text-secondary);
    transition: var(--transition-fast);

    &:hover {
      color: var(--accent-primary);
    }
  }
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
`;

const ContactLabel = styled.span`
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
`;

const ContactText = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: var(--text-secondary);
`;

const BottomFooter = styled.div`
  border-top: 1px solid var(--border-subtle);
  padding: 2rem var(--container-padding);
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    font-family: 'Lato', sans-serif;
    font-size: 0.75rem;
    color: var(--text-muted);
    letter-spacing: 0.05em;
    transition: var(--transition-fast);

    &:hover {
      color: var(--accent-primary);
    }
  }
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--bg-card);
  border: 1px solid var(--border-accent);
  color: var(--accent-primary);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: var(--transition-fast);
  z-index: 100;

  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FooterSection>
      <MainFooter>
        <FooterGrid>
          <BrandColumn>
            <Logo>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 8 L20 32" stroke="var(--accent-primary)" strokeWidth="1.5"/>
                <path d="M12 16 L20 8 L28 16" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none"/>
                <circle cx="20" cy="24" r="4" fill="var(--accent-primary)"/>
              </svg>
              <span>Atelier</span>
            </Logo>
            <BrandDescription>
              Un espacio dedicado a la creacion artistica donde la tradicion
              se encuentra con la innovacion. Descubre el arte de la pintura
              en su forma mas pura.
            </BrandDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Instagram">IG</SocialLink>
              <SocialLink href="#" aria-label="Facebook">FB</SocialLink>
              <SocialLink href="#" aria-label="Pinterest">PI</SocialLink>
              <SocialLink href="#" aria-label="YouTube">YT</SocialLink>
            </SocialLinks>
          </BrandColumn>

          <FooterColumn>
            <ColumnTitle>Navegacion</ColumnTitle>
            <FooterLinks>
              <FooterLink>
                <a onClick={() => scrollToSection('hero')}>Inicio</a>
              </FooterLink>
              <FooterLink>
                <a onClick={() => scrollToSection('about')}>Nosotros</a>
              </FooterLink>
              <FooterLink>
                <a onClick={() => scrollToSection('gallery')}>Galeria</a>
              </FooterLink>
              <FooterLink>
                <a onClick={() => scrollToSection('services')}>Servicios</a>
              </FooterLink>
              <FooterLink>
                <a onClick={() => scrollToSection('artists')}>Artistas</a>
              </FooterLink>
              <FooterLink>
                <a onClick={() => scrollToSection('workshops')}>Talleres</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Servicios</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#">Pintura al Oleo</a></FooterLink>
              <FooterLink><a href="#">Acuarela</a></FooterLink>
              <FooterLink><a href="#">Dibujo Artistico</a></FooterLink>
              <FooterLink><a href="#">Retrato</a></FooterLink>
              <FooterLink><a href="#">Paisajismo</a></FooterLink>
              <FooterLink><a href="#">Restauracion</a></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Contacto</ColumnTitle>
            <ContactItem>
              <ContactLabel>Direccion</ContactLabel>
              <ContactText>Calle del Arte, 42<br />28001 Madrid</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Telefono</ContactLabel>
              <ContactText>+34 912 345 678</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Email</ContactLabel>
              <ContactText>info@atelier.es</ContactText>
            </ContactItem>
          </FooterColumn>
        </FooterGrid>
      </MainFooter>

      <BottomFooter>
        <Copyright>
          {currentYear} Atelier. Todos los derechos reservados.
        </Copyright>
        <LegalLinks>
          <a href="#">Politica de Privacidad</a>
          <a href="#">Terminos y Condiciones</a>
          <a href="#">Cookies</a>
        </LegalLinks>
      </BottomFooter>

      <BackToTop onClick={scrollToTop} aria-label="Volver arriba">
        ↑
      </BackToTop>
    </FooterSection>
  );
};

export default Footer;
