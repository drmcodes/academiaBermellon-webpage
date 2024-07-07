import styled from "styled-components";
import HeroInfo from "./HeroInfo";
import HeroImage from "./HeroImage";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 80vh;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Hero = () => {
  return (
    <Container>
      <HeroInfo />
      <HeroImage />
    </Container>
  );
};

export default Hero;
