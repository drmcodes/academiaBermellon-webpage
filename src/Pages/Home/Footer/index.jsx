import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--eerie-black);
  color: var(--white);
  border-top: 1px solid white;
  padding: 20px 0;
`;

const Content = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: left; 
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;

const Title = styled.h2`
  padding: 10px 0;
  font-size: 1.1em;
   border-bottom:1px solid white;
   width:100%;
`;

const Paragraph = styled.p`
  margin: 10px 0;
  font-size: 1em;
  line-height: 1.5;
`;

const UList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1em;
  line-height: 1.5;
  width:100%;
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterContent>
          <Title>CONTACTO</Title>
          <Paragraph>
            Academia Bermellón
          </Paragraph>
        </FooterContent>
        <FooterContent>
          <Title>LINKS</Title>
          <UList>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </UList>
        </FooterContent>
        <FooterContent>
          <Title>LINKS</Title>
          <UList>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </UList>
        </FooterContent>
      </Content>
      <Paragraph style={{ marginTop: "20px" }}>
        © 2024 Your Company. All rights reserved.
      </Paragraph>
    </Container>
  );
};

export default Footer;
