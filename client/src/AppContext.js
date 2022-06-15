import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [playerInfo, setPlayerInfo] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [playerId, setPlayerId] = useState("");
  const [allBrawlersStats, setAllBrawlersStats] = useState("");
  const [userInformation, setUserInformation] = useState("");
  const { isAuthenticated } = useAuth0();
  const [friendPlayerId, setFriendPlayerId] = useState("");
  const [friendInfo, setFriendInfo] = useState("");

  useEffect(() => {
    fetch("/api/get-user-info")
      .then((res) => res.json())
      .then((data) => {
        setUserInformation(data);
        setPlayerId(data.data[0].playerTag);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isAuthenticated]);

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        playerInfo,
        setPlayerInfo,
        playerId,
        setPlayerId,
        allBrawlersStats,
        setAllBrawlersStats,
        userInformation,
        setUserInformation,
        friendPlayerId,
        setFriendPlayerId,
        friendInfo,
        setFriendInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
