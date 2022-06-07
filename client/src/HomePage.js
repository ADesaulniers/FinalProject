// Module imports
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";
import PlayerStatsByIdInput from "./PlayerStatsByIdInput";

const HomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/add-user", {
        method: "POST",
        body: JSON.stringify({ ...user, _id: user.sub }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Div>
      <BannerImg src={"/images/hero_bg_brawlstars_.jpg"} />
      <PlayerStatsByIdInput />
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
