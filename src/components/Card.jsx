import styled from "styled-components";
import "../App.css";

const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--white-smoke);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 400px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid var(--night);
`;

const StyledTitle = styled.h2`
  font-size: 1.5em;
  margin: 16px 0 8px;
`;

const StyledDescription = styled.p`
  color: var(--night);
  text-align: center;
`;

const StyledParent = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
`;

const StyledButton = styled.a`
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ButtonImage = styled.img`
  width: 24px;
  height: 24px;
`;

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description, buttonImages }) => {
  return (
    <Container>
      <StyledImg src={image} alt={title} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      {buttonImages && buttonImages.length > 0 && (
        <StyledParent>
          {buttonImages.map((btn, index) => (
            <StyledButton
              key={index}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonImage src={btn.src} alt={`Button ${index}`} />
            </StyledButton>
          ))}
        </StyledParent>
      )}
    </Container>
  );
};

export default Card;
