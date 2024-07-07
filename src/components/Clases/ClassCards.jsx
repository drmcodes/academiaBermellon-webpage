import styled from "styled-components";
import Card from "./Card";
import card1 from "../../assets/jpgs/../jpgs/cards/card1.jpg";
import card2 from "../../assets/jpgs/../jpgs/cards/card2.jpg";
import card3 from "../../assets/jpgs/../jpgs/cards/card3.jpg";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const ClassCards = () => {
  return (
    <Container>
      <Card
        img={card1}
        title={"Title 1"}
        content={
          "El contenido de la tarjeta proporciona información clave y concisa sobre el tema principal, destacando características, beneficios o detalles relevantes de manera clara y fácilmente digerible para el usuario."
        }
      />
      <Card
        img={card2}
        title={"Title 2"}
        content={
          "El contenido de la tarjeta presenta detalles esenciales de manera sucinta y efectiva, ofreciendo insights importantes sobre el tema tratado, diseñado para captar la atención del lector de manera directa y accesible."
        }
      />
      <Card
        img={card3}
        title={"Title 3"}
        content={
          "El contenido de la tarjeta proporciona información clave y concisa sobre el tema principal, destacando características, beneficios o detalles relevantes de manera clara y fácilmente digerible para el usuario."
        }
      />
      <Card
        img={card1}
        title={"Title 1"}
        content={
          "El contenido de la tarjeta presenta detalles esenciales de manera sucinta y efectiva, ofreciendo insights importantes sobre el tema tratado, diseñado para captar la atención del lector de manera directa y accesible."
        }
      />
    </Container>
  );
};

export default ClassCards;
