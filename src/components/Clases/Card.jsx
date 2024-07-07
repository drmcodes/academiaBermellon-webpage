import styled from "styled-components";

const Container = styled.div`
  background-color: #f9f9f9;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  max-height: 700px;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// eslint-disable-next-line react/prop-types
const Card = ({ img, title, content }) => {
  return (
    <Container>
      <Photo src={img} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </Container>
  );
};

export default Card;
