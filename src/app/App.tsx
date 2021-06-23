import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'states';
import { Game } from 'components/game';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from '../components/homescreen/index';

import './reset.css';
import './App.css';

export const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link className="headertext" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="headertext" to="/game">
              Game
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game" exact>
            <Provider store={store}>
              <Game></Game>
            </Provider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
