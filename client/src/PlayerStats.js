// Module imports
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { useParams } from "react-router-dom";

// Local imports
import styled from "styled-components";
import PlayerStatsByIdInput from "./PlayerStatsByIdInput";

// Getting the player stats from Supercell API with the player Id they provided when they logged in
const PlayerStats = () => {
  const { playerInfo, setPlayerInfo } = useContext(AppContext);
  const { playerId } = useParams();
  const currentId = playerId.slice(3);
  console.log(currentId);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(playerId, "playerId");

  useEffect(() => {
    fetch(`/api/get-player-info/${playerId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayerInfo(data);
        setIsLoaded(true);
        console.log(data.playerInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [playerId]);

  return (
    <Div>
      {isLoaded && (
        <StatsDiv>
          <PlayerStatsByIdInput />
          <Img src={"/images/16000040.png"} />
          <Stats>{playerInfo?.playerInfo.name}</Stats>
          <LeagueRankDiv>
            <PlayerInfoDiv>
              <RankImg
                src={"/images/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"}
              />
              <p>Highest Trophies: {playerInfo?.playerInfo.highestTrophies}</p>
            </PlayerInfoDiv>
            <PlayerInfoDiv>
              <RankImg
                src={
                  "/images/event_mode_showdown.6645d79502821e2d681b6f819a28eb12.png"
                }
              />
              <p>Solo Victories: {playerInfo?.playerInfo.soloVictories}</p>
            </PlayerInfoDiv>
            <PlayerInfoDiv>
              <RankImg
                src={
                  "/images/event_mode_duo_showdown.e9ddf754c048aa63d14de7ccfd8b6ec7.png"
                }
              />
              <p>Duo Victories: {playerInfo?.playerInfo.duoVictories}</p>
            </PlayerInfoDiv>
            <PlayerInfoDiv>
              <RankImg
                src={"/images/3vs3.44a7c5cbb968e04bd46b5db0a98a3af7.png"}
              />
              <p>3vs3 Victories: {playerInfo?.playerInfo["3vs3Victories"]}</p>
            </PlayerInfoDiv>
            <PlayerInfoDiv>
              <RankImg src={"/images/clan_badge_02_03.png"} />
              <p>Club: {playerInfo?.playerInfo.club.name}</p>
            </PlayerInfoDiv>
          </LeagueRankDiv>
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
  /* display: flex; */
`;

const Stats = styled.p`
  padding: 20px 0 0 0;
  font-weight: bolder;
  font-size: 30px;
`;

const LeagueRankDiv = styled.div`
  /* display: block; */
  /* position: relative; */
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  /* display: block; */
  /* justify-content: right; */
  /* align-items: right; */
`;

const StatsDiv = styled.div`
  width: 100%;
  height: 100%;
  /* display: inline-flex; */
  /* justify-content: right;
  align-items: right; */
  justify-content: center;
  align-items: center;
`;

const PlayerInfoDiv = styled.div``;

export default PlayerStats;
