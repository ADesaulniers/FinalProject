// Module imports
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <LogoutBtn onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </LogoutBtn>
  );
};

const LogoutBtn = styled.button`
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

export default LogoutButton;
