// Module imports
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";
import PlayerStatsByIdInput from "./PlayerStatsByIdInput";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Div>
      <Div2>
        <Img src={"/images/BrawlersImg/16000031.png"} />
      </Div2>

      <ProfileInfoDiv>
        {isAuthenticated && (
          <Div3>
            <ProfileImg src={user.picture} alt={user.name} />
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
          </Div3>
        )}
        <Div4>
          <PlayerStatsByIdInput />
        </Div4>
      </ProfileInfoDiv>
    </Div>
  );
};

const Img = styled.img`
  z-index: 1;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const ProfileImg = styled.img`
  z-index: 1;
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const Name = styled.p`
  padding: 10px 0;
`;

const Email = styled.p`
  padding: 10px 0;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const Div2 = styled.div`
  position: absolute;
`;

const Div3 = styled.div`
  /* position: absolute; */
`;

const Div4 = styled.div`
  position: absolute;
`;

const ProfileInfoDiv = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 850px;
  margin-bottom: 180px;
  padding-top: 180px;
`;

export default Profile;
