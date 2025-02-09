import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import card1 from "../../../assets/jpgs/cards/card1.jpg";
import card2 from "../../../assets/jpgs/cards/card2.jpg";
import card3 from "../../../assets/jpgs/cards/card3.jpg";
import card4 from "../../../assets/jpgs/cards/card4.jpg";

const SliderContainer = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 80%;
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
  flex-direction: column;
  background-color: transparent;

  width: 85%;
  max-width: 1000px;
  height: auto;
  padding: 25px;
`;

const Image = styled.img`
  width: 100%;
  height: 55%;
  border-radius: 10px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 12px;
`;

const CardText = styled.p`
  font-size: 17px;
  color: var(--white-smoke);
  margin-top: 6px;
`;

const cards = [
  {
    img: card1,
    title: "Técnicas de dibujo y bellas artes",
    content:
      "Ofrecemos un enfoque integral para el aprendizaje de diversas técnicas de dibujo y bellas artes, desde los fundamentos básicos hasta técnicas avanzadas, ideal para todos los niveles de habilidad.",
  },
  {
    img: card2,
    title: "Clases personalizadas y flexibles",
    content:
      "Nuestras clases están diseñadas para adaptarse a tus necesidades y horarios, proporcionando una experiencia de aprendizaje personalizada que se ajusta a tu ritmo y objetivos artísticos.",
  },
  {
    img: card3,
    title: "Exposiciones y eventos artísticos",
    content:
      "Participa en nuestras exposiciones y eventos artísticos para mostrar tu trabajo, conectarte con otros artistas y disfrutar de un entorno inspirador y creativo.",
  },
  {
    img: card4,
    title: "Talleres y Escuela de verano",
    content:
      "Únete a nuestros talleres y programas de escuela de verano, donde ofrecemos actividades intensivas y divertidas que te ayudarán a desarrollar tus habilidades artísticas mientras disfrutas de un ambiente veraniego y colaborativo.",
  },
];

const ClassCards = () => {
  return (
    <SliderContainer>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        loop
      >
        {cards.map((card, index) => (
          <StyledSwiperSlide key={index}>
            <CardWrapper>
              <Image src={card.img} alt={card.title} />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.content}</CardText>
              </CardContent>
            </CardWrapper>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </SliderContainer>
  );
};

export default ClassCards;
