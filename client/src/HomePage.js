// Local imports
import styled from "styled-components";

const HomePage = () => {
  return (
    <Div>
      <BannerImg src={"/images/hero_bg_brawlstars_.jpg"} />
    </Div>
  );
};

const BannerImg = styled.img`
  z-index: 1;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const Div = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HomePage;
