import React, { useCallback, useEffect, useState } from "react";
import Game from "./components/GameScreen";
import Ranking from "./components/RankingScreen";
import Home from "./components/HomeScreen";
import "./styles/stylesheet.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

class App extends React.Component<{}> {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/ranking">Ranking Screen</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact>
              <div>Hallo</div>
              <Home />
            </Route>
            <Route path="/game" exact>
              <Game />
            </Route>
            <Route path="/ranking" exact>
              <div>Ranking Screen</div>
              <Ranking />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
