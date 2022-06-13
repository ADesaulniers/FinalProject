// Module imports
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";

const PlayerStatsByIdInput = () => {
  const { playerId, setPlayerId } = useContext(AppContext);
  let history = useHistory();
  // const { userInformation, setUserInformation } = useContext(AppContext);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerId(inputValue);

    if (isAuthenticated) {
      fetch("/api/add-player-tag", {
        method: "PUT",
        body: JSON.stringify({
          ...user,
          playerTag: inputValue,
          _id: user.sub,
        }),
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

    history.push(`/PlayerStats/%23${inputValue}`);
  };

  return (
    <InputForm
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <P>Enter your player id here : </P>
      <PlayerTagInput
        required
        id="playerId"
        type="text"
        placeholder="XXXXXXXX"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </InputForm>
  );
};

const P = styled.p`
  z-index: 1;
  color: white;
  padding-bottom: 5px;
`;

const InputForm = styled.form`
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

export default PlayerStatsByIdInput;
