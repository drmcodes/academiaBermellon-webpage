import React from "react";
import styled from "styled-components";
import "../App.css";

const Card = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  height: 550px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f4f4f4;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #000000;
`;

const StyledTitle = styled.h2`
  font-size: 1.5em;
  margin: 16px 0 8px;
`;

const StyledDescription = styled.p`
  color: #666;
`;

const Profesor = ({ image, title, description }) => {
  return (
    <Card>
      <StyledImg src={image} alt={title} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </Card>
  );
};

export default Profesor;
