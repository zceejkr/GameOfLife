import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameOfLife from './GameOfLife'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Game of Life</h2>
        </div>
        <p className="App-intro">
          <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Read the wiki.</a>
        </p>
        <GameOfLife />
      </div>
    );
  }
}

export default App;
