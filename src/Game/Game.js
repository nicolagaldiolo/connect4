import React, { Component } from 'react';
import logo from './connect-4-logo.png';
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
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ],
      winner: false
    }

    this.addCell = this.addCell.bind(this)
  }

  addCell(col, row) {
    console.log(`in game aggiorno ${col}-${row}`);
    console.log(this.state);
    let cells = this.state.cells.slice();
    cells[col][row] = 1;
    this.setState({cells: cells});
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
            Player: Nicola
          </p>
        </div>
      </div>
    );
  }
}

export default Game;
