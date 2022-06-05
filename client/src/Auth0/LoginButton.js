// Module imports
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <LoginBtn onClick={() => loginWithRedirect()}>Log In</LoginBtn>;
};

const LoginBtn = styled.button`
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

export default LoginButton;
