// Local imports
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const DetailedBrawlerStats = () => {
  const { id } = useParams();
  const [detailedBrawlerStats, setDetailedBrawlerStats] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(id);

  useEffect(() => {
    fetch(`/api/get-single-brawler-stats/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailedBrawlerStats(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(detailedBrawlerStats, "ppppp");
  return (
    <Div>
      <Div2>
        <Img src={`/images/BrawlersImg/${id}.png`} />
      </Div2>

      {isLoaded && (
        <StatsDiv>
          <BrawlerName>{detailedBrawlerStats.BrawlerInfo.name}</BrawlerName>
          <GadgetP>Gadgets</GadgetP>
          <P>
            {" "}
            <Img2 src={`/images/BrawlersGadget/G1-${id}.png`} />
            {detailedBrawlerStats.BrawlerInfo.gadgets[0].name}
          </P>
          <P>
            <Img2 src={`/images/BrawlersGadget/G2-${id}.png`} />
            {detailedBrawlerStats.BrawlerInfo.gadgets[1].name}
          </P>
          <StarPower>Star Powers</StarPower>
          <P>
            <Img2 src={`/images/BrawlersStarPower/SP1-${id}.png`} />
            {detailedBrawlerStats.BrawlerInfo.starPowers[0].name}
          </P>
          <P>
            <Img2 src={`/images/BrawlersStarPower/SP2-${id}.png`} />
            {detailedBrawlerStats.BrawlerInfo.starPowers[1].name}
          </P>
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

const GadgetP = styled.p`
  font-weight: bold;
  margin-left: 20px;
`;

const StarPower = styled.p`
  font-weight: bold;
  margin-left: 20px;
`;

const P = styled.p`
  margin: 20px;
`;

const BrawlerName = styled.p`
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 60px;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  margin-bottom: 33px;
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

const Img2 = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 20px;
`;

export default DetailedBrawlerStats;
