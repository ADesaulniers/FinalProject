import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";

const AllGameBrawlersStats = () => {
  const { allBrawlersStats, setAllBrawlersStats } = useContext(AppContext);

  useEffect(() => {
    fetch("/api/get-all-game-brawlers-stats")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBrawlersStats(data);
        console.log(data.playerInfo.items[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AllGameBrawlersStatsDiv>
      <Img src={"/images/16000031.png"} />
      <P>Brawlers stats</P>
      <Img src={"/images/16000052.png"} />
      {/* <P>{allBrawlersStats.playerInfo.items[0]}</P> */}
    </AllGameBrawlersStatsDiv>
  );
};

const AllGameBrawlersStatsDiv = styled.div`
  position: relative;
`;

const Img = styled.img`
    /* width: 300px; */
    height: 300px;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const P = styled.p`
    position: absolute;
  /* visibility: hidden;
  opacity: 0;
  color: red;

  &:hover {
    visibility: visible;
    opacity: 1; */
  /* } */
`;

export default AllGameBrawlersStats;
