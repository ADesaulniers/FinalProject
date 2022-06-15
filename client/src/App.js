// Module imports
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
import DetailedBrawlerStats from "./AllGameBrawlersStats/DetailedBrawlerStats";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/PlayerStats/:playerId">
            <PlayerStats />
          </Route>

          <Route path="/FriendStats/:playerId">
            <FriendStats />
          </Route>

          <Route path="/AllGameBrawlersStats">
            <AllGameBrawlersStats />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/DetailedBrawlerStats/:id">
            <DetailedBrawlerStats />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
