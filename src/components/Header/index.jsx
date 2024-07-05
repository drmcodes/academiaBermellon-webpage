import logo from "../../assets/pngs/logo.png"
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  background-color: wheat;
  color: black;
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  font-weight: bold;
  flex-wrap:wrap;
`;

const Logo = styled.img`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 1em;
  padding: auto;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Navbar />
    </Container>
  );
};

export default Header;
