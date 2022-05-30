import styled from "styled-components";

const Header = () => {
    return <HeaderMainDiv>
        <Logo>BRAWL STARS Statistics</Logo>
        </HeaderMainDiv>
}

const HeaderMainDiv = styled.div`
background-color: black;
color: white;
padding: 20px;
`

const Logo = styled.p`
font-size: bold;
font-family: var(--heading-font-family);
`

export default Header;