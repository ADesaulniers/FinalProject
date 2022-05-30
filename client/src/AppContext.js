import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
      
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.data);
        // setIsLoading(false);
      })

      .catch((error) => {
        setError(true);
      });

      const loggedInUser = window.sessionStorage.getItem("name");
      if (loggedInUser) {
        setCurrentUser(loggedInUser);
        setLoggedIn(true);
        }

  }, []);

  return <AppContext.Provider value={{ setCurrentUser, setLoggedIn, loggedIn, currentUser, users }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;