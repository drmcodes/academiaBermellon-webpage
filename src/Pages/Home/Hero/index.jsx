import styled from "styled-components";
import HeroInfo from "./HeroInfo";
import HeroWave from "/src/assets/svgs/wave3.svg?t=1720309777909"
import HeroImage from "./HeroImage";

const Container = styled.div`
  background-image: url(${HeroWave});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
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
