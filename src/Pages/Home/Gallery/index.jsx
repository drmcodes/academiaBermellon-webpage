import styled from "styled-components";
import { useState } from "react";

const GallerySection = styled.section`
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
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=80');
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(to left, rgba(0,0,0,0.2) 0%, transparent 80%);
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0.2) 0%, transparent 80%);
  opacity: 0.4;

  @media (max-width: 968px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.8rem 1.5rem;
  background: ${({ active }) => active ? 'var(--accent-primary)' : 'transparent'};
  color: ${({ active }) => active ? 'var(--bg-primary)' : 'var(--text-secondary)'};
  border: 1px solid ${({ active }) => active ? 'var(--accent-primary)' : 'var(--border-subtle)'};
  transition: var(--transition-fast);

  &:hover {
    border-color: var(--accent-primary);
    color: ${({ active }) => active ? 'var(--bg-primary)' : 'var(--accent-primary)'};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: ${({ featured }) => featured ? '1/1.2' : '1/1'};
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);

  ${({ featured }) => featured && `
    grid-row: span 2;
  `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(10, 10, 10, 0.9) 0%,
      rgba(10, 10, 10, 0) 50%
    );
    opacity: 0;
    transition: var(--transition-medium);
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover > div:last-child {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
  filter: saturate(0.9);

  &:hover {
    filter: saturate(1);
  }
`;

const ItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: var(--transition-medium);
`;

const ItemTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
`;

const ItemCategory = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-primary);
`;

const ItemYear = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-left: 1rem;
`;

const ViewMoreButton = styled.button`
  display: block;
  margin: 4rem auto 0;
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1rem 3rem;
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

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'oleo', label: 'Oleo' },
    { id: 'acuarela', label: 'Acuarela' },
    { id: 'retrato', label: 'Retrato' },
    { id: 'paisaje', label: 'Paisaje' },
  ];

  const artworks = [
    {
      id: 1,
      title: 'Atardecer en el Valle',
      category: 'Paisaje',
      technique: 'Oleo',
      year: '2024',
      featured: true,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      id: 2,
      title: 'Retrato Clasico',
      category: 'Retrato',
      technique: 'Oleo',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80'
    },
    {
      id: 3,
      title: 'Flores de Primavera',
      category: 'Naturaleza',
      technique: 'Acuarela',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80'
    },
    {
      id: 4,
      title: 'Mar en Calma',
      category: 'Paisaje',
      technique: 'Oleo',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80'
    },
    {
      id: 5,
      title: 'Bodegon con Frutas',
      category: 'Bodegon',
      technique: 'Oleo',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80'
    },
    {
      id: 6,
      title: 'Jardin Secreto',
      category: 'Paisaje',
      technique: 'Acuarela',
      year: '2024',
      featured: true,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80'
    },
    {
      id: 7,
      title: 'Paisaje Nevado',
      category: 'Paisaje',
      technique: 'Oleo',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&q=80'
    },
    {
      id: 8,
      title: 'Composicion Abstracta',
      category: 'Abstracto',
      technique: 'Oleo',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80'
    },
  ];

  return (
    <GallerySection id="gallery">
      <BackgroundImage />
      <Container>
        <Header>
          <SectionLabel>Nuestras Obras</SectionLabel>
          <Title>
            Galeria de <span>Arte</span>
          </Title>
          <Description>
            Una seleccion de obras que representan la diversidad de tecnicas
            y estilos que cultivamos en nuestro estudio.
          </Description>
        </Header>

        <FilterTabs>
          {filters.map((filter) => (
            <FilterTab
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterTab>
          ))}
        </FilterTabs>

        <GalleryGrid>
          {artworks.map((artwork) => (
            <GalleryItem key={artwork.id} featured={artwork.featured}>
              <GalleryImage
                src={artwork.image}
                alt={artwork.title}
                loading="lazy"
              />
              <ItemInfo>
                <ItemTitle>{artwork.title}</ItemTitle>
                <ItemCategory>{artwork.category}</ItemCategory>
                <ItemYear>{artwork.year}</ItemYear>
              </ItemInfo>
            </GalleryItem>
          ))}
        </GalleryGrid>

        <ViewMoreButton>
          Ver Galeria Completa
        </ViewMoreButton>
      </Container>
    </GallerySection>
  );
};

export default Gallery;
