import React, { Component } from 'react';
//import logo from './logo.svg';
import './Game.css';
import Board from '../Board/Board';

class Game extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Forza Quattro</h2>
        </div>
        <div className="table">
          <Board cols="7"/>
          <p className="App-intro">
            Player: Nicola
          </p>
        </div>
      </div>
    );
  }
}

export default Game;
