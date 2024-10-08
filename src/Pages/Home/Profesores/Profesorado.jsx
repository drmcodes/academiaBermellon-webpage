import styled from "styled-components";
import Card from "../../../components/Card";
import Luisa from "../../../assets/jpgs/profesores/LuisaMaria-Hernandez.jpg";
import Gonzalo from "../../../assets/jpgs/profesores/Gonzalo-Achau.jpg";
import Julio from "../../../assets/jpgs/profesores/Julio-Navarro.jpg";

import instagramIcon from "../../../assets/icons/instagram.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import websiteIcon from "../../../assets/icons/web.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;

const Profesorado = () => {
  return (
    <Container>
      <Card
        image={Luisa}
        title="Luisa"
        description="Conoce a nuestro profesor principal, experto en técnicas avanzadas de pintura y bellas artes. Su dedicación y pasión por enseñar han inspirado a numerosos estudiantes a lo largo de los años."
        buttonImages={[
          { src: instagramIcon, url: "https://www.instagram.com" },
          { src: facebookIcon, url: "https://www.facebook.com" },
          { src: websiteIcon, url: "https://www.website.com" },
        ]}
      />
      <Card
        image={Gonzalo}
        title="Gonzalo"
        description="Nuestro segundo profesor es un artista consumado con una vasta experiencia en diversos estilos artísticos. Su enfoque práctico y su habilidad para transmitir conocimiento hacen de él un recurso invaluable para nuestros estudiantes."
        buttonImages={[
          { src: instagramIcon, url: "https://www.instagram.com" },
          { src: websiteIcon, url: "https://www.website.com" },
        ]}
      />
      <Card
        image={Julio}
        title="Julio"
        description="Descubre a nuestro tercer profesor, especializado en teoría del color y composición artística. Su comprensión profunda de los fundamentos del arte complementa su habilidad para motivar a los estudiantes a alcanzar nuevas alturas en su creatividad."
        buttonImages={[
          { src: facebookIcon, url: "https://www.facebook.com" },
          { src: websiteIcon, url: "https://www.website.com" },
        ]}
      />
    </Container>
  );
};

export default Profesorado;
