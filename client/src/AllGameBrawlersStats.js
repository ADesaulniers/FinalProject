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
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;

const Img = styled.img`
  height: 300px;
  width: 300px;
  padding: 17px;
  object-fit: cover;
  /* border: 5px solid black; */

  &:hover {
    cursor: pointer;
  }
`;

const Div = styled.div`
  position: relative;
  width: 100vw;
  padding-left: 70px;
`;

// const P = styled.p`
//   padding: 6px;
//   font-size: 15px;

//   &:hover {
//     /* visibility: visible; */
//     /* opacity: 1; */
//   }
// `;

export default AllGameBrawlersStats;
