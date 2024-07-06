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
      <Card img={card1} title={"Title 1"} content={"lorem ipsum guacamole pepe flan hola 1 2 3 perro flan mazapan chocoflan"}/>
      <Card img={card2} title={"Title 2"} content={"lorem ipsum guacamole pepe flan hola 1 2 3 perro flan mazapan chocoflan"}/>
      <Card img={card3} title={"Title 3"} content={"lorem ipsum guacamole pepe flan hola 1 2 3 perro flan mazapan chocoflan"}/>
    </Container>
  );
};

export default ClassCards;
