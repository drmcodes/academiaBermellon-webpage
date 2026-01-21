import styled from "styled-components";

const ArtistsSection = styled.section`
  background: var(--bg-primary);
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

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -200px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(226, 61, 40, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80');
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(to left, rgba(0,0,0,0.15) 0%, transparent 70%);
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0.15) 0%, transparent 70%);
  opacity: 0.5;

  @media (max-width: 968px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
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
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  span {
    font-style: italic;
    color: var(--accent-primary);
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ArtistCard = styled.div`
  position: relative;
  text-align: center;
  transition: var(--transition-medium);

  &:hover {
    transform: translateY(-10px);
  }

  &:hover > div:first-child {
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-glow);
  }

  &:hover > div:first-child::before {
    opacity: 1;
  }
`;

const ArtistImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  margin-bottom: 2rem;
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  transition: var(--transition-medium);
  background: linear-gradient(
    135deg,
    var(--bg-tertiary) 0%,
    var(--bg-card) 100%
  );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(10, 10, 10, 0.8) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: var(--transition-medium);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(201, 169, 98, 0.05) 0%,
      transparent 70%
    );
  }
`;

const ArtistPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
  filter: saturate(0.9);

  ${ArtistCard}:hover & {
    transform: scale(1.05);
    filter: saturate(1);
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 2;
  opacity: 0;
  transition: var(--transition-medium);

  ${ArtistCard}:hover & {
    opacity: 1;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid var(--border-accent);
  font-size: 0.9rem;
  color: var(--accent-primary);
  transition: var(--transition-fast);

  &:hover {
    background: var(--accent-primary);
    color: var(--bg-primary);
  }
`;

const ArtistInfo = styled.div``;

const ArtistName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const ArtistRole = styled.span`
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-primary);
  margin-bottom: 1rem;
`;

const ArtistBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 280px;
  margin: 0 auto;
`;

const QuoteSection = styled.div`
  margin-top: 6rem;
  padding: 4rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  text-align: center;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Playfair Display', serif;
    font-size: 6rem;
    color: var(--accent-primary);
    opacity: 0.2;
    line-height: 1;
  }
`;

const QuoteText = styled.blockquote`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 2rem;
  position: relative;
`;

const QuoteAuthor = styled.cite`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  font-style: normal;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-primary);
`;

const Artists = () => {
  const artists = [
    {
      name: 'Elena Rodriguez',
      role: 'Directora & Maestra',
      bio: 'Con mas de 25 anos de experiencia en pintura al oleo y retrato, Elena ha expuesto en galerias de toda Europa.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
      social: { instagram: '#', portfolio: '#' },
    },
    {
      name: 'Carlos Mendez',
      role: 'Maestro de Paisajismo',
      bio: 'Especialista en tecnicas de plein air y paisajismo. Formado en la Academia de Bellas Artes de Florencia.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      social: { instagram: '#', portfolio: '#' },
    },
    {
      name: 'Sofia Laurent',
      role: 'Maestra de Acuarela',
      bio: 'Reconocida acuarelista con obras en colecciones privadas de America y Asia. Autora de tres libros de tecnica.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
      social: { instagram: '#', portfolio: '#' },
    },
  ];

  return (
    <ArtistsSection id="artists">
      <BackgroundImage />
      <Container>
        <Header>
          <SectionLabel>Equipo Creativo</SectionLabel>
          <Title>
            Nuestros <span>Artistas</span>
          </Title>
          <Description>
            Maestros con anos de experiencia y pasion por transmitir
            el arte de la pintura a nuevas generaciones.
          </Description>
        </Header>

        <ArtistsGrid>
          {artists.map((artist, index) => (
            <ArtistCard key={index}>
              <ArtistImage>
                <ArtistPhoto
                  src={artist.image}
                  alt={artist.name}
                  loading="lazy"
                />
                <SocialLinks>
                  <SocialLink href={artist.social.instagram} aria-label="Instagram">
                    IG
                  </SocialLink>
                  <SocialLink href={artist.social.portfolio} aria-label="Portfolio">
                    W
                  </SocialLink>
                </SocialLinks>
              </ArtistImage>
              <ArtistInfo>
                <ArtistName>{artist.name}</ArtistName>
                <ArtistRole>{artist.role}</ArtistRole>
                <ArtistBio>{artist.bio}</ArtistBio>
              </ArtistInfo>
            </ArtistCard>
          ))}
        </ArtistsGrid>

        <QuoteSection>
          <QuoteText>
            Cada artista fue primero un aficionado. El talento es
            solo el punto de partida; la dedicacion y la practica constante
            son lo que transforman la habilidad en maestria.
          </QuoteText>
          <QuoteAuthor>Ralph Waldo Emerson</QuoteAuthor>
        </QuoteSection>
      </Container>
    </ArtistsSection>
  );
};

export default Artists;
