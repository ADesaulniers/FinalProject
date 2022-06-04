import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import BrawlerProfile from "./BrawlerProfile";

// Getting information about all the brawlers of the game

const AllGameBrawlersStats = () => {
  const { allBrawlersStats, setAllBrawlersStats } = useContext(AppContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/get-all-game-brawlers-stats")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBrawlersStats(data.playerInfo.items); // This is only the array of the brawlers
        setIsLoaded(true);
        console.log(data.playerInfo.items[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Div>
      {isLoaded && (
        <AllGameBrawlersStatsDiv>
          {allBrawlersStats.map((brawlerData) => {
            return (
              <BrawlerProfile key={brawlerData.id} brawlerData={brawlerData} />
            );
          })}
        </AllGameBrawlersStatsDiv>
      )}
    </Div>
  );
};

const AllGameBrawlersStatsDiv = styled.div`
  /* display: table;
  position: relative; */
  /* align-content: stretch; */
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;

const Img = styled.img`
  /* position: absolute; */
  /* width: 300px; */
  height: 300px;
  width: 300px;
  padding: 17px;
  object-fit: cover;
  /* border: 5px solid black; */

  &:hover {
    cursor: pointer;
    /* opacity: 0.5; */
  }
`;

const Div = styled.div`
  position: relative;
  width: 100vw;
`;

const Div2 = styled.div`
  position: absolute;
  top: 0;
  /* margin: 60px; */
  padding: 45px 85px;
  justify-content: right;
  opacity: 0;
  /* height: 300px; */

  &:hover {
    /* visibility: visible; */
    opacity: 0.8;
    background-color: white;
    font-weight: bold;
  }
`;

const P = styled.p`
  padding: 6px;
  font-size: 15px;

  &:hover {
    /* visibility: visible; */
    /* opacity: 1; */
  }
`;

export default AllGameBrawlersStats;
