import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Div>
      <HeaderMainDiv>
        <Logo to="/">BRAWL STARS Statistics</Logo>
            <P>My Stats</P>
            <P>All Brawlers</P>
      <SignIn>
        Sign In
      </SignIn>
      </HeaderMainDiv>
    </Div>
  );
};


const Div = styled.div`
  background-color: black;
`

const HeaderMainDiv = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  /* justify-content: left; */
  align-items: center;
`;

const P = styled.p`
font-family: Verdana, Geneva, Tahoma, sans-serif;
padding: 10px;
justify-content: left;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled(NavLink)`
  font-size: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const SignIn = styled.button`
  color: white;
  width: fit-content;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  float: right;
  background-color: black;


  &:hover {
    cursor: pointer;
    background-color: #101010;
  }
`;



export default Header;
