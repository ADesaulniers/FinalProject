import Header from "./Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
// import styled from 'styled-components';
import HomePage from "./HomePage";
import PlayerStats from "./PlayerStats";

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

        <Route exact path="/PlayerStats">
          <PlayerStats />
        </Route>

      </Switch>
    </div>
    // </BrowserRouter>
  );
};


export default App;
