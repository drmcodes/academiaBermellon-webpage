import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background-color: var(--eerie-black);
  color: var(--white);
  border-top: 1px solid white;
`;
const Content = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
`;
const FooterContent = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  padding: 0;
`;

const Paragraph = styled.p``;

const UList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterContent>
          <Title>FOOTER CONTENT</Title>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            quod hic suscipit voluptates corrupti placeat!
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
    </Container>
  );
};

export default Footer;
