// Module imports
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

// Local imports
import styled from "styled-components";

// Getting the player stats from Supercell API with the player Id they provided when they logged in
const FriendStats = () => {
  const { friendInfo, setFriendInfo } = useContext(AppContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const friendPlayerId = "9PGLU0YPC";

  useEffect(() => {
    fetch(`/api/get-player-info/%23${friendPlayerId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFriendInfo(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [friendPlayerId]);

  return (
    <Div>
      <Div2>
        <Img src={"/images/BrawlersImg/16000028.png"} />
      </Div2>

      {isLoaded && (
        <StatsDiv>
          <Stats>{friendInfo?.playerInfo.name}</Stats>
          <PlayerInfoDiv>
            <p>
              <RankImg
                src={"/images/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"}
              />
              Highest Trophies: {friendInfo?.playerInfo.highestTrophies}
            </p>
          </PlayerInfoDiv>
          <PlayerInfoDiv>
            <p>
              <RankImg
                src={
                  "/images/event_mode_showdown.6645d79502821e2d681b6f819a28eb12.png"
                }
              />{" "}
              Solo Victories: {friendInfo?.playerInfo.soloVictories}
            </p>
          </PlayerInfoDiv>
          <PlayerInfoDiv>
            <p>
              <RankImg
                src={
                  "/images/event_mode_duo_showdown.e9ddf754c048aa63d14de7ccfd8b6ec7.png"
                }
              />{" "}
              Duo Victories: {friendInfo?.playerInfo.duoVictories}
            </p>
          </PlayerInfoDiv>
          <PlayerInfoDiv>
            <p>
              <RankImg
                src={"/images/3vs3.44a7c5cbb968e04bd46b5db0a98a3af7.png"}
              />{" "}
              3vs3 Victories: {friendInfo?.playerInfo["3vs3Victories"]}
            </p>
          </PlayerInfoDiv>
          <PlayerInfoDiv>
            <p>
              <RankImgBadge src={"/images/clan_badge_02_03.png"} /> Club:{" "}
              {friendInfo?.playerInfo.club.name}
            </p>
          </PlayerInfoDiv>
        </StatsDiv>
      )}
    </Div>
  );
};

const Img = styled.img`
  z-index: 1;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const RankImg = styled.img`
  width: 40px;
  margin-right: 20px;
`;

const RankImgBadge = styled.img`
  width: 30px;
  margin-right: 28px;
`;

const Stats = styled.p`
  padding: 20px 0;
  font-weight: bolder;
  font-size: 30px;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const Div2 = styled.div`
  position: absolute;
`;

const StatsDiv = styled.div`
  width: fit-content;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 850px;
  margin-bottom: 80px;
  padding-top: 80px;
`;

const PlayerInfoDiv = styled.div`
  padding: 10px 0;
`;

export default FriendStats;
