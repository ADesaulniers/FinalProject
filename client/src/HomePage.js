import { useState } from "react";
import styled from "styled-components";

// import 'dotenv/config'

const HomePage = () => {
  

  const [addPlayerId, setAddPlayerId] = useState("");
  // let history = useHistory();

  const handleChange = (e) => {
    setAddPlayerId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(process.env.BRAWLSTARS_API_KEY);
    // console.log("process.env.BRAWLSTARS_API_KEY");
    fetch("/api/get-player-info")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // sessionStorage.setItem(
        //   "PlayerIdList",
        //   JSON.stringify(data.newPlayer._id)
        // );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Div>
      <BannerImg src={"/images/hero_bg_brawlstars_.jpg"} />
      <InputDiv
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <P>Enter your player id here : </P>
        <PlayerTagInput
          required
          onChange={handleChange}
          id="playerId"
          type="text"
          placeholder="XXXXXXXX"
          value={addPlayerId}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </InputDiv>
    </Div>
  );
};

const BannerImg = styled.img`
  z-index: 1;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const P = styled.p`
  z-index: 1;
  color: white;
  padding-bottom: 5px;
`;

const Div = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputDiv = styled.form`
  width: fit-content;
  padding: 20px;
  background-color: black;
  border: 3px solid white;
  max-height: 100vh;
  margin: auto;
  z-index: 2;
  position: absolute;
  top: 50%;
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

export default HomePage;
