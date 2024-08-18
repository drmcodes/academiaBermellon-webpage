import logo from "./../../../assets/pngs/logo.png";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  background-color: var(--night);
  color: var(--white-smoke);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  font-weight: bold;
  flex-wrap: wrap;
  position:fixed;
  top:0;
`;

const Logo = styled.img`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1em;
  padding: auto;
  @media (max-width: 800px) {
    margin: 15px 5px;
  }
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
