import "../../App.css";
import Hero from "./Hero";

import Clases from "../../components/Clases/index";

import Teachers from "./Profesores";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-image: url(/assets/svgs/wave3.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
        <Clases />
       <Teachers/>
    </>
  );
};

export default Home;
