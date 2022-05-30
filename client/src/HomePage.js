import styled from "styled-components";

const HomePage = () => {
  return (
    <div>
      <BannerImg src={"/images/hero_bg_brawlstars_.jpg"} />
      <InputDiv>
        <PlayerTagInput required type="text" placeholder="#XXXXXXXX" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </InputDiv>
    </div>
  );
};

const BannerImg = styled.img`
  z-index: 1;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const InputDiv = styled.div`
  width: fit-content;
  padding: 20px;
  background-color: black;
  border: 3px solid white;
  /* max-width: 100%; */
  max-height: 100vh;
  margin: auto;
  z-index: 2;
  /* display: flex; */
  /* flex-direction: row; */
  /* position: center; */
  /* position: absolute; */
  /* left: 500px;
  top: 350px; */
`;

const PlayerTagInput = styled.input`
  z-index: 2;
  /* display: block;
  position: center; */
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const SubmitButton = styled.button`
  z-index: 2;
  /* display: block;
  position: center; */
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

export default HomePage;
