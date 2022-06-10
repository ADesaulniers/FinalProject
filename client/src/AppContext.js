import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [playerInfo, setPlayerInfo] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [playerId, setPlayerId] = useState("");
  const [allBrawlersStats, setAllBrawlersStats] = useState("");
  const [userInformation, setUserInformation] = useState("");

  useEffect(() => {
    fetch("/api/get-user-info")
      .then((res) => res.json())
      .then((data) => {
        setUserInformation(data);
        // setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
