// Local imports
import styled from "styled-components";

const BrawlerProfile = ({ brawlerData }) => {
  // Destructure the brawlerData object
  const { id, name, starPowers, gadgets } = brawlerData;

  return (
    <Div>
      <Img src={`/images/BrawlersImg/${id}.png`} />
      <Div2>
        <P>{name}</P>
        {/* TODO: map over starPowers array abd gadgets array to display them */}
        {starPowers.map((starPower) => {
          const { id: starPowerId, name: starPowerName } = starPower;
          return <P key={starPowerId}>{starPowerName}</P>;
        })}
        {gadgets.map((gadget) => {
          const { id: gadgetId, name: gadgetName } = gadget;
          return <P key={gadgetId}>{gadgetName}</P>;
        })}
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
  /* margin: 60px; */
  padding: 75px 85px;
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
  width: 100%;
  height: 100%;

  &:hover {
    /* visibility: visible; */
    /* opacity: 1; */
  }
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

export default BrawlerProfile;
