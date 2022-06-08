import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [playerInfo, setPlayerInfo] = useState("");
  //   const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [playerId, setPlayerId] = useState("");
  const [allBrawlersStats, setAllBrawlersStats] = useState("");
  const [friendPlayerId, setFriendPlayerId] = useState("");

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
        friendPlayerId,
        setFriendPlayerId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
