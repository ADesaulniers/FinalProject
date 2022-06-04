import Header from "./Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import HomePage from "./HomePage";
import PlayerStats from "./PlayerStats";
import Footer from "./Footer";
import AllGameBrawlersStats from "./AllGameBrawlersStats";

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

        <Route exact path="/PlayerStats/:playerId">
          <PlayerStats />
        </Route>

        <Route exact path="/AllGameBrawlersStats">
          <AllGameBrawlersStats />
        </Route>

      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
};


export default App;
