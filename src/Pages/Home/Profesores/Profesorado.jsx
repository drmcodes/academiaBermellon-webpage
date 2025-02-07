import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Luisa from "../../../assets/jpgs/profesores/LuisaMaria-Hernandez.jpg";
import Gonzalo from "../../../assets/jpgs/profesores/Gonzalo-Achau.jpg";
import Julio from "../../../assets/jpgs/profesores/Julio-Navarro.jpg";

import instagramIcon from "../../../assets/icons/instagram.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import websiteIcon from "../../../assets/icons/web.png";

const ProfesorSliderContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  margin-top: -20px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 85%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1100px;
  height: 550px;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 810px) {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    max-width: 350px;
  }

  @media (max-width: 810px) {
    width: 70%;
  }
`;

const TextContainer = styled.div`
  width: 55%;
  padding-left: 25px;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #666;
  }

  @media (max-width: 810px) {
    width: 100%;
    padding-left: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const profesores = [
  {
    image: Luisa,
    title: "Luisa",
    description:
      "Experta en técnicas avanzadas de pintura y bellas artes. Ha inspirado a muchos estudiantes con su pasión por enseñar.",
    socialLinks: [
      { src: instagramIcon, url: "https://www.instagram.com" },
      { src: facebookIcon, url: "https://www.facebook.com" },
      { src: websiteIcon, url: "https://www.website.com" },
    ],
  },
  {
    image: Gonzalo,
    title: "Gonzalo",
    description:
      "Artista con una vasta experiencia en estilos artísticos. Su enfoque práctico y su habilidad para transmitir conocimiento son únicos.",
    socialLinks: [
      { src: instagramIcon, url: "https://www.instagram.com" },
      { src: websiteIcon, url: "https://www.website.com" },
    ],
  },
  {
    image: Julio,
    title: "Julio",
    description:
      "Especialista en teoría del color y composición artística. Motiva a los estudiantes a alcanzar nuevas alturas creativas.",
    socialLinks: [
      { src: facebookIcon, url: "https://www.facebook.com" },
      { src: websiteIcon, url: "https://www.website.com" },
    ],
  },
];

const Profesorado = () => {
  return (
    <ProfesorSliderContainer>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        loop
      >
        {profesores.map((profesor, index) => (
          <StyledSwiperSlide key={index}>
            <CardWrapper>
              <ImageContainer>
                <img src={profesor.image} alt={profesor.title} />
              </ImageContainer>
              <TextContainer>
                <h3>{profesor.title}</h3>
                <p>{profesor.description}</p>
                <SocialLinks>
                  {profesor.socialLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                      <img src={link.src} alt="social icon" />
                    </a>
                  ))}
                </SocialLinks>
              </TextContainer>
            </CardWrapper>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </ProfesorSliderContainer>
  );
};

export default Profesorado;
