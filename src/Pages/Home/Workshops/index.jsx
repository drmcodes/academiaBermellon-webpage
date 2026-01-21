import styled from "styled-components";

const WorkshopsSection = styled.section`
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
  width: 40%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80');
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 70%);
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 70%);
  opacity: 0.4;

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

const WorkshopsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const WorkshopCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  transition: var(--transition-medium);
  display: grid;
  grid-template-columns: 200px 1fr;

  &:hover {
    border-color: var(--border-accent);
    box-shadow: var(--shadow-glow);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const WorkshopImage = styled.div`
  position: relative;
  min-height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-slow);
  }

  ${WorkshopCard}:hover & img {
    transform: scale(1.08);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(226, 61, 40, 0.08) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

const WorkshopContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const WorkshopCategory = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-primary);
  margin-bottom: 0.8rem;
`;

const WorkshopTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
`;

const WorkshopDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const WorkshopMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
`;

const MetaValue = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: var(--text-primary);
`;

const FeaturedWorkshop = styled.div`
  grid-column: span 2;
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 100%);
  border: 1px solid var(--border-accent);
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
    gap: 2rem;
  }

  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const FeaturedContent = styled.div`
  @media (max-width: 968px) {
    text-align: center;
  }
`;

const FeaturedBadge = styled.span`
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--bg-primary);
  background: var(--accent-primary);
  padding: 0.4rem 1rem;
  margin-bottom: 1.5rem;
`;

const FeaturedTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 1rem;

  span {
    color: var(--accent-primary);
    font-style: italic;
  }
`;

const FeaturedDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const FeaturedButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  background: var(--accent-primary);
  color: var(--bg-primary);
  border: 1px solid var(--accent-primary);
  transition: var(--transition-fast);
  cursor: pointer;
  position: relative;
  z-index: 10;
  display: inline-block;

  &:hover {
    background: transparent;
    color: var(--accent-primary);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const FeaturedImage = styled.div`
  aspect-ratio: 4/3;
  border: 1px solid var(--border-subtle);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-slow);
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(226, 61, 40, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
`;

const CTATitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto 2rem;
`;

const CTAButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-accent);
  transition: var(--transition-fast);

  &:hover {
    background: var(--accent-primary);
    color: var(--bg-primary);
    border-color: var(--accent-primary);
  }
`;

const Workshops = () => {
  const workshops = [
    {
      category: 'Principiantes',
      title: 'Introduccion a la Pintura',
      description: 'Curso completo para quienes inician su camino en el mundo del arte. Aprende los fundamentos esenciales.',
      duration: '8 semanas',
      schedule: 'Sabados 10:00',
      price: '350',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    },
    {
      category: 'Intermedio',
      title: 'Tecnicas de Retrato',
      description: 'Domina el arte del retrato: proporcion facial, captura de expresiones y manejo de la luz.',
      duration: '6 semanas',
      schedule: 'Martes 18:00',
      price: '420',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
    },
    {
      category: 'Avanzado',
      title: 'Masterclass de Oleo',
      description: 'Tecnicas avanzadas de veladuras, impasto y composicion para pintores experimentados.',
      duration: '10 semanas',
      schedule: 'Jueves 17:00',
      price: '580',
      image: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=600&q=80',
    },
    {
      category: 'Especializado',
      title: 'Acuarela Botanica',
      description: 'Aprende a representar la belleza de la naturaleza con tecnicas precisas de acuarela.',
      duration: '4 semanas',
      schedule: 'Domingos 11:00',
      price: '280',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
    },
  ];

  return (
    <WorkshopsSection id="workshops">
      <BackgroundImage />
      <Container>
        <Header>
          <SectionLabel>Formacion Artistica</SectionLabel>
          <Title>
            Talleres y <span>Cursos</span>
          </Title>
          <Description>
            Programas de formacion disenados para todos los niveles,
            desde principiantes hasta artistas que buscan perfeccionar su tecnica.
          </Description>
        </Header>

        <WorkshopsGrid>
          <FeaturedWorkshop>
            <FeaturedContent>
              <FeaturedBadge>Nuevo Curso</FeaturedBadge>
              <FeaturedTitle>
                Intensivo de <span>Verano</span>
              </FeaturedTitle>
              <FeaturedDescription>
                Cuatro semanas de inmersion total en el mundo de la pintura.
                Incluye todas las tecnicas: oleo, acuarela, dibujo y composicion.
                Ideal para quienes desean un aprendizaje acelerado.
              </FeaturedDescription>
              <FeaturedButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Reservar Plaza
              </FeaturedButton>
            </FeaturedContent>
            <FeaturedImage>
              <img
                src="https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=800&q=80"
                alt="Curso Intensivo de Verano"
                loading="lazy"
              />
            </FeaturedImage>
          </FeaturedWorkshop>

          {workshops.map((workshop, index) => (
            <WorkshopCard key={index}>
              <WorkshopImage>
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  loading="lazy"
                />
              </WorkshopImage>
              <WorkshopContent>
                <WorkshopCategory>{workshop.category}</WorkshopCategory>
                <WorkshopTitle>{workshop.title}</WorkshopTitle>
                <WorkshopDescription>{workshop.description}</WorkshopDescription>
                <WorkshopMeta>
                  <MetaItem>
                    <MetaLabel>Duracion</MetaLabel>
                    <MetaValue>{workshop.duration}</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Horario</MetaLabel>
                    <MetaValue>{workshop.schedule}</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Precio</MetaLabel>
                    <MetaValue>{workshop.price}€</MetaValue>
                  </MetaItem>
                </WorkshopMeta>
              </WorkshopContent>
            </WorkshopCard>
          ))}
        </WorkshopsGrid>

        <CTASection>
          <CTATitle>No encuentras lo que buscas?</CTATitle>
          <CTAText>
            Ofrecemos clases particulares y programas personalizados
            adaptados a tus objetivos y disponibilidad.
          </CTAText>
          <CTAButton>Consultar Disponibilidad</CTAButton>
        </CTASection>
      </Container>
    </WorkshopsSection>
  );
};

export default Workshops;
