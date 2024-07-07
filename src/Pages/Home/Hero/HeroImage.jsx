import styled from "styled-components";
import video from "../../../assets/webm/hero-video.webm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Centra el contenido horizontalmente */
  width: 50%;
  height: 100%; /* Para ocupar todo el alto del contenedor */
  @media (max-width: 800px) {
    display: none; /* Oculta el div completamente en pantallas pequeñas */
  }
`;

const HeroVideo = styled.video`
  width: 90%;
  object-fit: fill;
  @media (max-width: 800px) {
    display: none;
  }
`;

const HeroImage = () => {
  return (
    <Container>
      <HeroVideo src={video} autoPlay loop muted></HeroVideo>
    </Container>
  );
};

export default HeroImage;
