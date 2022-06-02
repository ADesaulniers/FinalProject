import styled from "styled-components";
import { AiFillYoutube, AiFillFacebook } from "react-icons/ai";
// import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <HeaderMainDiv>
      <LogoYoutube>
        <AiFillYoutube size="20px" />
      </LogoYoutube>
      <LogoFacebook to="https://fb.gg/brawlstars">
        <AiFillFacebook size="20px" />
      </LogoFacebook>
    </HeaderMainDiv>
  );
};

const HeaderMainDiv = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const LogoYoutube = styled.p`
  display: inline-block;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
    color: var(--accent-color-blue);
  }
`;

const LogoFacebook = styled.p`
  display: inline-block;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
    color: var(--accent-color-blue);
  }
`;

export default Footer;
