// Module imports
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Local imports
import Header from "./Header";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import HomePage from "./HomePage";
import PlayerStats from "./PlayerStats/PlayerStats";
import Footer from "./Footer";
import AllGameBrawlersStats from "./AllGameBrawlersStats/AllGameBrawlersStats";
import Profile from "./Profile";
import FriendStats from "./FriendStats/FriendStats";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated) {
    // TODO: Send request to backend to verify if user exist in MongoDB
  }

  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/PlayerStats/:playerId">
            <PlayerStats />
          </Route>

          <Route exact path="/FriendStats/:playerId">
            <FriendStats />
          </Route>

          <Route exact path="/AllGameBrawlersStats">
            <AllGameBrawlersStats />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
