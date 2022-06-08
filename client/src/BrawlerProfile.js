// Local imports
import styled from "styled-components";

const BrawlerProfile = ({ brawlerData }) => {
  // Destructure the brawlerData object
  const { id, name, starPowers, gadgets } = brawlerData;

  return (
    <Div>
      <Img src={`/images/BrawlersImg/${id}.png`} />
      <Div2>
        <P1>{name}</P1>
        {/* map over starPowers array abd gadgets array to display them */}
        {starPowers.map((starPower) => {
          const { id: starPowerId, name: starPowerName } = starPower;
          return <P key={starPowerId}>{starPowerName.toLowerCase()}</P>;
        })}
        {gadgets.map((gadget) => {
          const { id: gadgetId, name: gadgetName } = gadget;
          return <P key={gadgetId}>{gadgetName.toLowerCase()}</P>;
        })}
        <Div3>
          <Img2 src={`/images/BrawlersGadget/G1-${id}.png`} />
          <Img2 src={`/images/BrawlersGadget/G2-${id}.png`} />
          <Img2 src={`/images/BrawlersStarPower/SP1-${id}.png`} />
          <Img2 src={`/images/BrawlersStarPower/SP2-${id}.png`} />
        </Div3>
      </Div2>
    </Div>
  );
};

const Div = styled.div`
  position: relative;
`;

const Div2 = styled.div`
  position: absolute;
  top: 0;
  padding: 75px 95px;
  justify-content: right;
  opacity: 0;

  &:hover {
    opacity: 0.8;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Div3 = styled.div`
  padding-top: 5px;
`;

const P = styled.p`
  padding: 6px;
  font-size: 14px;
  width: 280px;
  height: 100%;
`;

const P1 = styled.p`
  padding: 6px;
  font-size: 15px;
  width: 100%;
  height: 100%;
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

const Img2 = styled.img`
  height: 25px;
  width: 25px;
`;

export default BrawlerProfile;
