import styled from "styled-components";

const AboutSection = styled.section`
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-subtle), transparent);
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80');
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 60%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 60%, transparent 100%);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent 0%, var(--bg-secondary) 90%);
  }

  @media (max-width: 968px) {
    width: 100%;
    height: 50%;
    opacity: 0.2;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 100%);
  }
`;

const Container = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ImageColumn = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 100%;
    height: 100%;
    border: 1px solid var(--border-accent);
    z-index: 0;
  }
`;

const MainImage = styled.div`
  position: relative;
  aspect-ratio: 4/5;
  overflow: hidden;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(18, 16, 16, 0.4) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const StudioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.85) contrast(1.05);
  transition: var(--transition-slow);

  &:hover {
    transform: scale(1.03);
    filter: saturate(1) contrast(1.05);
  }
`;

const QuoteBox = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--bg-primary);
  border: 1px solid var(--border-accent);
  padding: 2rem;
  max-width: 280px;
  z-index: 2;

  @media (max-width: 968px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 2rem;
    max-width: 100%;
  }
`;

const Quote = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1rem;

  &::before {
    content: '"';
    color: var(--accent-primary);
    font-size: 2rem;
    line-height: 0;
    vertical-align: -0.4em;
    margin-right: 0.2em;
  }
`;

const QuoteAuthor = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-primary);
`;

const ContentColumn = styled.div`
  @media (max-width: 968px) {
    text-align: center;
  }
`;

const SectionLabel = styled.span`
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

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 2rem;

  span {
    font-style: italic;
    color: var(--accent-primary);
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid var(--border-subtle);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: left;

  @media (max-width: 968px) {
    text-align: center;
  }
`;

const StatNumber = styled.span`
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: var(--accent-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const About = () => {
  const stats = [
    { number: '500+', label: 'Obras Creadas' },
    { number: '150+', label: 'Alumnos Formados' },
    { number: '25', label: 'Anos de Trayectoria' },
  ];

  return (
    <AboutSection id="about">
      <BackgroundImage />
      <Container>
        <Grid>
          <ImageColumn>
            <ImageWrapper>
              <MainImage>
                <StudioImage
                  src="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=800&q=80"
                  alt="Estudio de arte"
                />
              </MainImage>
            </ImageWrapper>
            <QuoteBox>
              <Quote>
                El arte no reproduce lo visible, sino que hace visible lo invisible.
              </Quote>
              <QuoteAuthor>Paul Klee</QuoteAuthor>
            </QuoteBox>
          </ImageColumn>

          <ContentColumn>
            <SectionLabel>Nuestra Historia</SectionLabel>
            <Title>
              Un espacio donde la <span>creatividad</span> florece
            </Title>
            <Description>
              Fundado en 1999, Atelier nacio de la pasion por preservar
              y transmitir las tecnicas clasicas de la pintura, adaptandolas
              al lenguaje contemporaneo del arte.
            </Description>
            <Description>
              Nuestro estudio es mas que un espacio de trabajo; es un santuario
              para artistas donde cada pincelada cuenta una historia y cada
              lienzo se convierte en un dialogo entre el artista y su vision.
            </Description>

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatItem key={index}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsGrid>
          </ContentColumn>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
