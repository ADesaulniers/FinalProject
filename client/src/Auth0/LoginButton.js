// Module imports
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    console.log(user);
  }

  // const clickHandler = () => {
  //   console.log(user);

  //   fetch("/api/add-user", {
  //     method: "POST",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data).catch((error) => {
  //         console.log(error);
  //       });
  //     });
  //   loginWithRedirect();
  // };

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
