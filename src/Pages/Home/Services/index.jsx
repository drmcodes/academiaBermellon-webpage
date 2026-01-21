import styled from "styled-components";

const ServicesSection = styled.section`
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

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(201, 169, 98, 0.03) 0%, transparent 70%);
    pointer-events: none;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 3rem 2rem;
  position: relative;
  transition: var(--transition-medium);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--gradient-gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: var(--transition-medium);
  }

  &:hover {
    border-color: var(--border-accent);
    transform: translateY(-8px);
    box-shadow: var(--shadow-glow);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--accent-primary);
  border: 1px solid var(--border-accent);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 5px;
    border: 1px solid var(--border-subtle);
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  font-family: 'Lato', sans-serif;
  font-size: 0.85rem;
  color: var(--text-muted);
  padding: 0.4rem 0;
  padding-left: 1.2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 4px;
    background: var(--accent-primary);
    transform: translateY(-50%) rotate(45deg);
  }
`;

const HighlightCard = styled.div`
  grid-column: span 3;
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 100%);
  border: 1px solid var(--border-accent);
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-column: span 2;
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;

const HighlightContent = styled.div``;

const HighlightTitle = styled.h3`
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

const HighlightText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const HighlightButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  background: var(--accent-primary);
  color: var(--bg-primary);
  border: 1px solid var(--accent-primary);
  transition: var(--transition-fast);

  &:hover {
    background: transparent;
    color: var(--accent-primary);
  }
`;

const HighlightStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const StatBox = styled.div`
  text-align: center;
  padding: 1.5rem;
  border: 1px solid var(--border-subtle);
`;

const StatNumber = styled.span`
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--accent-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Pintura al Oleo',
      description: 'Tecnicas tradicionales y contemporaneas de pintura al oleo sobre lienzo.',
      features: ['Tecnica clasica', 'Veladuras', 'Impasto', 'Alla prima'],
    },
    {
      icon: '🖌️',
      title: 'Acuarela',
      description: 'Domina el arte delicado de la acuarela con nuestros maestros especializados.',
      features: ['Mojado sobre mojado', 'Tecnica seca', 'Botanica', 'Paisajismo'],
    },
    {
      icon: '✏️',
      title: 'Dibujo Artistico',
      description: 'Fundamentos del dibujo: proporcion, perspectiva y tecnicas de sombreado.',
      features: ['Grafito', 'Carbon', 'Sanguina', 'Tinta'],
    },
    {
      icon: '👤',
      title: 'Retrato',
      description: 'Aprende a capturar la esencia y expresion del rostro humano.',
      features: ['Anatomia facial', 'Iluminacion', 'Expresion', 'Estilo personal'],
    },
    {
      icon: '🏔️',
      title: 'Paisajismo',
      description: 'Tecnicas para representar la naturaleza en toda su magnificencia.',
      features: ['Perspectiva aerea', 'Composicion', 'Luz natural', 'Plein air'],
    },
    {
      icon: '🖼️',
      title: 'Restauracion',
      description: 'Servicios profesionales de restauracion y conservacion de obras de arte.',
      features: ['Limpieza', 'Retoque', 'Reentelado', 'Barnizado'],
    },
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <Header>
          <SectionLabel>Lo Que Ofrecemos</SectionLabel>
          <Title>
            Nuestros <span>Servicios</span>
          </Title>
          <Description>
            Ofrecemos una amplia gama de servicios artisticos, desde formacion
            especializada hasta proyectos personalizados y restauracion de obras.
          </Description>
        </Header>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <ServiceFeature key={idx}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}

          <HighlightCard>
            <HighlightContent>
              <HighlightTitle>
                Proyectos <span>Personalizados</span>
              </HighlightTitle>
              <HighlightText>
                Realizamos encargos personalizados adaptados a tus necesidades.
                Desde retratos familiares hasta obras para espacios corporativos,
                cada proyecto es unico y recibe nuestra maxima dedicacion.
              </HighlightText>
              <HighlightButton>Solicitar Presupuesto</HighlightButton>
            </HighlightContent>
            <HighlightStats>
              <StatBox>
                <StatNumber>200+</StatNumber>
                <StatLabel>Encargos Realizados</StatLabel>
              </StatBox>
              <StatBox>
                <StatNumber>98%</StatNumber>
                <StatLabel>Clientes Satisfechos</StatLabel>
              </StatBox>
              <StatBox>
                <StatNumber>15</StatNumber>
                <StatLabel>Paises</StatLabel>
              </StatBox>
              <StatBox>
                <StatNumber>30</StatNumber>
                <StatLabel>Dias Promedio</StatLabel>
              </StatBox>
            </HighlightStats>
          </HighlightCard>
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
