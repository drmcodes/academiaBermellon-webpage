import styled from "styled-components";

import instagramIcon from "../../../assets/icons/instagram.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import websiteIcon from "../../../assets/icons/web.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--eerie-black);
  color: var(--white);
  border-top: 2px solid var(--imperial-red);
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
`;

const Content = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  padding: 10px 0;
  font-size: 1.3em;
  border-bottom: 2px solid var(--imperial-red);
  width: 100%;
  color: var(--imperial-red);
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin: 10px 0;
  font-size: 1em;
  line-height: 1.6;
  color: var(--white-smoke);
`;

const UList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1em;
  line-height: 1.6;
  color: var(--white-smoke);
`;

const ListItem = styled.li`
  margin: 8px 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--imperial-red);
    cursor: pointer;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--imperial-red);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e44e23;
  }

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <FooterContent>
          <Title>CONTACTO</Title>
          <Paragraph>Academia Bermellón</Paragraph>
          <Paragraph>Av. Isabel la Católica 1 C, Albacete 02005</Paragraph>
          <Paragraph>Email: academiabermellon@gmail.com</Paragraph>
          <Paragraph>Teléfono: 967 665 799</Paragraph>
        </FooterContent>
        <FooterContent>
          <Title>INFORMACIÓN</Title>
          <UList>
            <ListItem>Acerca de nosotros</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Política de privacidad</ListItem>
            <ListItem>Términos y condiciones</ListItem>
          </UList>
        </FooterContent>
        <FooterContent>
          <Title>ENLACES RÁPIDOS</Title>
          <UList>
            <ListItem>Inicio</ListItem>
            <ListItem>Servicios</ListItem>
            <ListItem>Galería</ListItem>
            <ListItem>Contactar</ListItem>
          </UList>
        </FooterContent>
      </Content>
      <SocialLinksContainer>
        <SocialLink href="https://www.instagram.com" target="_blank">
          <img src={instagramIcon} alt="Instagram" />
        </SocialLink>
        <SocialLink href="https://www.facebook.com" target="_blank">
          <img src={facebookIcon} alt="Facebook" />
        </SocialLink>
        <SocialLink href="https://www.website.com" target="_blank">
          <img src={websiteIcon} alt="Website" />
        </SocialLink>
      </SocialLinksContainer>
      <Paragraph style={{ marginTop: "20px" }}>
        © {currentYear} Academia Bermellón. Todos los derechos reservados.
      </Paragraph>
    </Container>
  );
};

export default Footer;
