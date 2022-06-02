import { useContext, useEffect } from "react";
import styled from "styled-components";
  import { AppContext } from "./AppContext";

const PlayerStats = () => {
  const { playerInfo, setPlayerInfo } = useContext(AppContext);

  useEffect(() => {
    fetch("/api/get-player-info")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayerInfo(data);
        console.log(data.playerInfo)
        // sessionStorage.setItem(
        //   "PlayerIdList",
        //   JSON.stringify(data.newPlayer._id)
        // );
      })
      .catch((error) => {
        console.log(error);
      });

    //   const loggedInUser = window.sessionStorage.getItem("id");
    //   if (loggedInUser) {
    //     setCurrentPlayer(loggedInUser);
    //     setLoggedIn(true);
    //     }
  }, []);

  return (
    <Div>
      <Img src={"/images/16000040.png"} />
      <StatsDiv>
        {/* <Stats>{playerInfo?.playerInfo.name}</Stats> */}
        <LeagueRankDiv>
        <RankImg src={"/images/solo_league.d5f730dfa4be7b386ac05cc200d5ab36.png"}/>
        <p> Stats </p>
        {/* {console.log(playerInfo.playerInfo.name)}
        <p>{playerInfo?.playerInfo.name}</p> */}
        <RankImg src={"/images/team_league.e1f08f2616b550db0214535f0439d393.png"}/>
        <p> Stats </p>
        </LeagueRankDiv>
      </StatsDiv>
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
    display: inline-block;
`

const Stats = styled.p`
padding: 20px 0 0 0;
font-weight: bolder;
font-size: 30px;
`

const LeagueRankDiv = styled.div`
    /* display: flex; */
    /* position: relative; */
`;


const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
`;

const StatsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
  justify-content: center;
  align-items: center;
`;

export default PlayerStats;


