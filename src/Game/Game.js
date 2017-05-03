import React, { Component } from 'react';
//import logo from './logo.svg';
import './Game.css';
import Board from '../Board/Board';

class Game extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cells: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0],
        [0,2,1,0,0,0,0],
        [1,1,2,2,1,0,0]
      ],
      winner: false
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Forza Quattro</h2>
        </div>
        <div className="table">
          <Board cells={this.state.cells}/>
          <p className="App-intro">
            Player: Nicola
          </p>
        </div>
      </div>
    );
  }
}

export default Game;
