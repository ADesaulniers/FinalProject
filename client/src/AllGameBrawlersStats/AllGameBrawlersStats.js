import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
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
        setAllBrawlersStats(data.playerInfo.items); // This is only the array of the brawlers
        setIsLoaded(true);
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
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;

const Div = styled.div`
  position: relative;
  width: fit-content;
  padding-left: 70px;
`;

export default AllGameBrawlersStats;
