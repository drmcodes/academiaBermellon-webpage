import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--bg-primary);
  overflow: hidden;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(ellipse at 20% 80%, rgba(226, 61, 40, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(128, 0, 32, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80');
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--bg-primary) 0%, transparent 60%);
  }

  @media (max-width: 968px) {
    width: 100%;
    opacity: 0.3;
    mask-image: linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 100%);
    -webkit-mask-image: linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 100%);
  }
`;

const HeroContent = styled.div`
  max-width: var(--container-max);
  width: 100%;
  padding: 0 var(--container-padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    padding-top: 100px;
  }
`;

const HeroText = styled.div`
  animation: ${slideIn} 1s ease-out;
`;

const Subtitle = styled.span`
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-primary);
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 60px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 45px;
    height: 1px;
    background: var(--accent-primary);
  }

  @media (max-width: 968px) {
    padding-left: 0;

    &::before {
      display: none;
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);

  span {
    display: block;
    font-style: italic;
    color: var(--accent-primary);
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;

  @media (max-width: 968px) {
    margin: 0 auto 2.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--bg-primary);
  background: var(--accent-primary);
  padding: 1rem 2.5rem;
  border: 1px solid var(--accent-primary);
  transition: var(--transition-fast);

  &:hover {
    background: transparent;
    color: var(--accent-primary);
  }
`;

const SecondaryButton = styled.button`
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-primary);
  background: transparent;
  padding: 1rem 2.5rem;
  border: 1px solid var(--border-accent);
  transition: var(--transition-fast);

  &:hover {
    border-color: var(--accent-primary);
    color: var(--accent-primary);
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (max-width: 968px) {
    order: -1;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  aspect-ratio: 4/5;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 1px solid var(--accent-primary);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to top, var(--bg-primary), transparent);
    pointer-events: none;
    z-index: 2;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.8) contrast(1.1);
  transition: var(--transition-slow);

  &:hover {
    transform: scale(1.03);
    filter: saturate(1) contrast(1.1);
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  bottom: 40px;
  left: -30px;
  background: var(--bg-primary);
  border: 1px solid var(--border-accent);
  padding: 1.5rem 2rem;
  z-index: 3;

  @media (max-width: 968px) {
    left: 20px;
    bottom: 20px;
    padding: 1rem 1.5rem;
  }
`;

const BadgeNumber = styled.span`
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: var(--accent-primary);
  line-height: 1;
`;

const BadgeText = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: ${fadeIn} 1s ease-out 1s both;
  z-index: 2;

  span {
    font-family: 'Lato', sans-serif;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  &::after {
    content: '';
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--accent-primary), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 1; transform: scaleY(1); }
    50% { opacity: 0.5; transform: scaleY(0.8); }
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection id="hero">
      <BackgroundImage />
      <HeroContent>
        <HeroText>
          <Subtitle>Atelier de Arte & Pintura</Subtitle>
          <Title>
            Donde el Arte
            <span>cobra vida</span>
          </Title>
          <Description>
            Un espacio dedicado a la creacion artistica, donde la tradicion
            se encuentra con la innovacion. Descubre el arte de la pintura
            en su forma mas pura y expresiva.
          </Description>
          <ButtonGroup>
            <PrimaryButton onClick={() => scrollToSection('gallery')}>
              Ver Galeria
            </PrimaryButton>
            <SecondaryButton onClick={() => scrollToSection('contact')}>
              Contactar
            </SecondaryButton>
          </ButtonGroup>
        </HeroText>

        <HeroImageWrapper>
          <ImageFrame>
            <HeroImage
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80"
              alt="Pintura artistica"
            />
          </ImageFrame>
          <FloatingBadge>
            <BadgeNumber>25+</BadgeNumber>
            <BadgeText>Anos de experiencia</BadgeText>
          </FloatingBadge>
        </HeroImageWrapper>
      </HeroContent>

      <ScrollIndicator>
        <span>Scroll</span>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
