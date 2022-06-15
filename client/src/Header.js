// Module imports
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";
import LoginButton from "./Auth0/LoginButton";
import LogoutButton from "./Auth0/LogoutButton";

const Header = () => {
  const { playerId } = useContext(AppContext);
  const { isAuthenticated } = useAuth0();
  const { friendPlayerId } = useContext(AppContext);

  return (
    <Div>
      <HeaderMainDiv>
        <Logo to="/">BRAWL STARS Statistics</Logo>
        {isAuthenticated && playerId ? (
          <MyStatsNav to={`/PlayerStats/%23${playerId}`}>My Stats</MyStatsNav>
        ) : (
          ""
        )}
        {isAuthenticated && friendPlayerId ? (
          <MyStatsNav to={`/FriendStats/%23${friendPlayerId}`}>
            Friend Stats
          </MyStatsNav>
        ) : (
          ""
        )}
        <AllBrawlersNav to="/AllGameBrawlersStats">All Brawlers</AllBrawlersNav>
        {isAuthenticated ? <ProfileNav to="/profile">Profile</ProfileNav> : ""}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </HeaderMainDiv>
    </Div>
  );
};

const Div = styled.div`
  background-color: black;
`;

const HeaderMainDiv = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Logo = styled(NavLink)`
  font-size: 30px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-decoration: none;
  color: white;
  padding-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const MyStatsNav = styled(NavLink)`
  color: white;
  width: fit-content;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  float: right;
  background-color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #101010;
  }
`;

const AllBrawlersNav = styled(NavLink)`
  color: white;
  width: fit-content;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  float: right;
  background-color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #101010;
  }
`;

const ProfileNav = styled(NavLink)`
  color: white;
  width: fit-content;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  float: right;
  background-color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #101010;
  }
`;

export default Header;
