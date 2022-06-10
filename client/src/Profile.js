// Module imports
import React, { useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import styled from "styled-components";
import PlayerStatsByIdInput from "./PlayerStatsByIdInput";
import FriendStatsByIdInput from "./FriendstatsByIdinput";
import { AppContext } from "./AppContext";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { userInformation, setUserInformation } = useContext(AppContext);

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
            <p>Player Tag #: {userInformation.data[0].playerTag}</p>
          </Div3>
        )}
        <Div4>
          {/* {userInformation.data[0].playerTag ? (
            <PlayerFriendStatsByIdInput />
          ) : (
            <PlayerStatsByIdInput />
          )} */}

          <FriendStatsByIdInput />
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
  padding-top: 50px;
`;

const ProfileInfoDiv = styled.div`
  width: fit-content;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 850px;
  margin-bottom: 210px;
  padding-top: 135px;
`;

export default Profile;
