import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import "./styles/stylesheet.css";

class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
