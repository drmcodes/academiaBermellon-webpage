import styled from "styled-components"

const Container = styled.div` 
display: flex;
flex-direction:column;
align-items:center;
text-align:justify;
`

const H1 = styled.h1`
font-size:3rem;
color: var(--white);
border-bottom: 1px solid var(--white-smoke);
padding-bottom:10px;
text-align:center;
margin:10px;
 @media (max-width: 800px) {
    font-size:2rem
  }
`

const Paragraph = styled.p`
width:70%;
text-align:center;
font-weight:500;
`



const Title = () => {
  return (
    <Container>
         <H1>Aprende a dibujar y crear bellas obras de arte</H1>
      <Paragraph>
        En nuestra academia de dibujo y bellas artes, te enseñaremos una
        variedad de técnicas para que puedas expresar tu creatividad y
        desarrollar tus habilidades artísticas. Ya sea que seas principiante o
        tengas experiencia, nuestros expertos instructores te guiarán en tu
        camino artístico.
      </Paragraph>
    </Container>
  )
}

export default Title