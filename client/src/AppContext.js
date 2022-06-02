import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [player, setPlayer] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  useEffect(() => {
      
    // fetch("/api/add-player")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setPlayer(data.data);
    //     // setIsLoading(false);
    //   })

    //   .catch((error) => {
    //     setError(true);
    //   });

    //   const loggedInUser = window.sessionStorage.getItem("id");
    //   if (loggedInUser) {
    //     setCurrentPlayer(loggedInUser);
    //     setLoggedIn(true);
    //     }

  }, []);

  return <AppContext.Provider value={{ setCurrentPlayer, setLoggedIn, loggedIn, currentPlayer, player }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;