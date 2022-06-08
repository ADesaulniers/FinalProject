// Module imports
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";

const PlayerFriendStatsByIdInput = () => {
  const { friendPlayerId, setFriendPlayerId } = useContext(AppContext);
  let history = useHistory();

  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      fetch("/api/add-player-tag", {
        method: "POST",
        body: JSON.stringify({ ...user, playerFriendTag: friendPlayerId }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }

    history.push(`/PlayerStats/%23${friendPlayerId}`);
  };

  console.log(friendPlayerId, "))))");

  return (
    <InputDiv
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <P>Enter your friend player id here : </P>
      <PlayerTagInput
        required
        id="friendPlayerId"
        type="text"
        placeholder="XXXXXXXX"
        value={friendPlayerId}
        onChange={(e) => {
          setFriendPlayerId(e.target.value);
        }}
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </InputDiv>
  );
};

const P = styled.p`
  z-index: 1;
  color: white;
  padding-bottom: 5px;
`;

const InputDiv = styled.form`
  width: 300px;
  padding: 20px;
  background-color: black;
  border: 3px solid white;
  max-height: 100vh;
  margin: auto;
  z-index: 2;
  position: absolute;
  top: 50%;
  text-align: center;
`;

const PlayerTagInput = styled.input`
  z-index: 2;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const SubmitButton = styled.button`
  z-index: 2;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
  color: black;
  background-color: white;
  border-color: white;
  border-style: none;
  padding: 3px 5px;

  &:hover {
    cursor: pointer;
    background-color: var(--accent-color-blue);
    color: white;
  }
`;

export default PlayerFriendStatsByIdInput;
