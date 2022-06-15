// Local imports
import styled from "styled-components";
import { AiFillYoutube, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <HeaderMainDiv>
      <LogoYoutube href="https://www.youtube.com/c/brawlstars">
        <AiFillYoutube size="20px" />
      </LogoYoutube>
      <LogoFacebook href="https://fb.gg/brawlstars">
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

const LogoYoutube = styled.a`
  display: inline-block;
  padding: 0 10px;
  color: white;

  &:hover {
    cursor: pointer;
    color: var(--accent-color-blue);
  }
`;

const LogoFacebook = styled.a`
  display: inline-block;
  padding: 0 10px;
  color: white;

  &:hover {
    cursor: pointer;
    color: var(--accent-color-blue);
  }
`;

export default Footer;
