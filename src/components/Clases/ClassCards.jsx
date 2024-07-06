import styled from "styled-components";
import Card from "./Card";
import card1 from "../../assets/jpgs/card1.jpg"
import card2 from "../../assets/jpgs/card2.jpg"
import card3 from "../../assets/jpgs/card3.jpg"
const Container = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap; 
  justify-content: space-evenly; 
  margin-top: 20px;
`;

const ClassCards = () => {
  return (

    //TODO pasar props img title content a las cards
    <Container>
      <Card img={card1} title={"Title 1"} content={"El contenido de la tarjeta proporciona información clave y concisa sobre el tema principal, destacando características, beneficios o detalles relevantes de manera clara y fácilmente digerible para el usuario."}/>
      <Card img={card2} title={"Title 2"} content={"El contenido de la tarjeta presenta detalles esenciales de manera sucinta y efectiva, ofreciendo insights importantes sobre el tema tratado, diseñado para captar la atención del lector de manera directa y accesible."}/>
      <Card img={card3} title={"Title 3"} content={"hola hola hola perro gato caballo animal helado flan agua  aaaaaaaaaaaaaaaaaaaaaaaaaaa El contenido de la tarjeta presenta detalles esenciales de manera sucinta y efectiva, ofreciendo insights importantes sobre el tema tratado, diseñado para captar la atención del lector de manera directa y accesible HOLA HOLA HOLA."}/>
      <Card img={card1} title={"Title 1"} content={"El contenido de la tarjeta proporciona información clave y concisa sobre el tema principal, destacando características, beneficios o detalles relevantes de manera clara y fácilmente digerible para el usuario."}/>
    </Container>
  );
};

export default ClassCards;
