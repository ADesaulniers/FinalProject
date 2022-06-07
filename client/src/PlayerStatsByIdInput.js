// Module imports
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { useHistory } from "react-router-dom";

// Local imports
import styled from "styled-components";

const PlayerStatsByIdInput = () => {
  const { playerId, setPlayerId } = useContext(AppContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/PlayerStats/%23${playerId}`);
  };

  console.log(playerId, "))))");

  return (
    <InputDiv
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <P>Enter your player id here : </P>
      <PlayerTagInput
        required
        // onChange={handleChange}
        id="playerId"
        type="text"
        placeholder="XXXXXXXX"
        value={playerId}
        onChange={(e) => {
          setPlayerId(e.target.value);
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

export default PlayerStatsByIdInput;
