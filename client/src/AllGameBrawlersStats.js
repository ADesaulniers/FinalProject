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
  }, [allBrawlersStats]);

  return (
    <AllGameBrawlersStatsDiv>
        {console.log(allBrawlersStats)}
        <Div>
      <Img src={"/images/16000031.png"} />
      {/* <P>Brawlers stats</P> */}
      </Div>
      <Div>
      {/* <Img src={"/images/16000052.png"} /> */}
      <P>{allBrawlersStats.playerInfo.items[0].name}</P>
      </Div>
      <Div>
      {/* <Img src={"/images/16000043.png"} /> */}
      {/* <P>Brawlers stats</P> */}
      </Div>
    </AllGameBrawlersStatsDiv>
  );
};

const AllGameBrawlersStatsDiv = styled.div`
 display: table;
 position: relative;
 /* align-content: stretch; */
 display: flex;
`;

const Img = styled.img`
/* position: absolute; */
    /* width: 300px; */
    height: 300px;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const P = styled.p`
    position: absolute;
   align-self: flex-start;
  /* visibility: hidden;
  opacity: 0;
  color: red;

  &:hover {
    visibility: visible;
    opacity: 1; */
  /* } */
`;

const Div = styled.div`
`

export default AllGameBrawlersStats;
