import React, { Component } from 'react';
import logo from './connect-4-logo.png';
import './Game.css';
import Board from '../Board/Board';

class Game extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cells: [
        Array(7).fill(''),
        Array(7).fill(''),
        Array(7).fill(''),
        Array(7).fill(''),
        Array(7).fill(''),
        Array(7).fill(''),
        Array(7).fill('')
      ],
      winner: false,
      player: 1
    }

    this.addCell = this.addCell.bind(this);
  }

  addCell(col, row) {
    console.log(`in game aggiorno ${col}-${row}`);
    console.log(this.state);
    let cells = this.state.cells.slice();
    cells[col][row] = this.state.player;
    let player = this.state.player == 1 ? 2 : 1;
    this.setState({
      cells: cells,
      player: player
    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="forza 4"/>
        </div>
        <div className="table">
          <Board cells={this.state.cells} addCell={this.addCell}/>
          <p className="App-intro">
            Player: <span className={"player-icon player" + this.state.player}></span>
          </p>
        </div>
      </div>
    );
  }
}

export default Game;
