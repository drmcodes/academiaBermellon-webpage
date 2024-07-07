import styled from "styled-components";


const Header = styled.h1`
  padding-bottom: 15px;
  font-size: 3em;
  border-bottom: 1px solid #f4f4f4;
  text-align:left;
`;

const Content = styled.p`
  color: var(--white);
  font-size: 1.2rem;
  text-align: justify;
`;
const Title = () => {
  return (
    <>
    <Header>Nuestros profesores</Header>
      <Content>
        Conoce a nuestros profesores, expertos en todos los campos de la pintura
        y las bellas artes. Su dedicación y habilidades en la enseñanza han
        inspirado a generaciones de estudiantes a explorar y desarrollar su
        propio estilo artístico.
      </Content>
    </>
      
 
  );
};

export default Title;
