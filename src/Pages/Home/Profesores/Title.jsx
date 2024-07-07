import styled from "styled-components"

const Container = styled.div`
`

const Header = styled.h1`
 padding-bottom: 15px;
  font-size: 3em;
  border-bottom: 1px solid #f4f4f4;
`

const Content = styled.p`
 color: var(--white);
 font-size:1.2rem;
 text-align:justify;
`
const Title = () => {
  return (
    <Container>
          <Header>Nuestros profesores</Header>
          <Content>
            Conoce a nuestros profesores, expertos en todos los campos de la
            pintura y las bellas artes. Su dedicación y habilidades en la
            enseñanza han inspirado a generaciones de estudiantes a explorar y
            desarrollar su propio estilo artístico.
          </Content>
        </Container>
  )
}

export default Title