import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";

const AllGameBrawlersStats = () => {
  const { allBrawlersStats, setAllBrawlersStats } = useContext(AppContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/get-all-game-brawlers-stats")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBrawlersStats(data);
        setIsLoaded(true);
        console.log(data.playerInfo.items[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [allBrawlersStats]);

  return (
    <Div>
      {isLoaded && (
        <AllGameBrawlersStatsDiv>
          <Div>
            <Img src={"/images/16000000.png"} />
            <Div2>
            <P>{allBrawlersStats.playerInfo.items[0].name}</P>
            <P>Star Power: {allBrawlersStats.playerInfo.items[0].starPowers[0].name}</P>
            <P>Star Power: {allBrawlersStats.playerInfo.items[0].starPowers[1].name}</P>
            <P>Gadget: {allBrawlersStats.playerInfo.items[0].gadgets[0].name}</P>
            <P>Gadget: {allBrawlersStats.playerInfo.items[0].gadgets[1].name}</P>
            </Div2>
          </Div>
          <Div>
            <Img src={"/images/16000001.png"} />
            <Div2>
            <P>{allBrawlersStats.playerInfo.items[1].name}</P>
            <P>Star Power: {allBrawlersStats.playerInfo.items[1].starPowers[0].name}</P>
            <P>Star Power: {allBrawlersStats.playerInfo.items[1].starPowers[1].name}</P>
            <P>Gadget: {allBrawlersStats.playerInfo.items[1].gadgets[0].name}</P>
            <P>Gadget: {allBrawlersStats.playerInfo.items[1].gadgets[1].name}</P>
            </Div2>
          </Div>
        </AllGameBrawlersStatsDiv>
      )}
    </Div>
  );
};

const AllGameBrawlersStatsDiv = styled.div`
  /* display: table;
  position: relative; */
  /* align-content: stretch; */
  /* display: flex; */
`;

const Img = styled.img`
  /* position: absolute; */
  /* width: 300px; */
  height: 300px;

  &:hover {
    cursor: pointer;
    /* opacity: 0.5; */
  }
`;

const Div = styled.div`
position: relative;
`;

const Div2 = styled.div`
position: absolute;
    top: 0;
    margin: 8%;
    justify-content: right;
    opacity: 0;
    height: 300px;


    &:hover {
    /* visibility: visible; */
    opacity: 1;
  }
`;

const P = styled.p`
padding: 5px;
  

&:hover {
    /* visibility: visible; */
    /* opacity: 1; */
  }
`;


export default AllGameBrawlersStats;
