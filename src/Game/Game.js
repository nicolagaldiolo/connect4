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
    let winner = false;
    console.log(`in game aggiorno ${col}-${row}`);
    console.log(this.state);
    let cells = this.state.cells.slice();
    cells[col][row] = this.state.player;
    let player = this.state.player == 1 ? 2 : 1;
    this.setState({
      cells: cells,
      player: player
    });
    winner = this.calculateWinner();
    if (winner) {
      alert(`il segno ${winner} ha vinto!!!`);
    }    
  }


  calculateWinner() {
    for (let i = 0; i < this.state.cells.length; i++) {
      const col = this.state.cells[i];
      let result = false;
      
      for (let j = 0; j < col.length; j++) {
        const cell = col[j];
        if ( cell > 0 ) {
          //console.log(`PARTENZA: Verifico cella (${i},${j})`);
          result = this.calculateWinnerFrom(i+1, j,   cell, 'right',      3);
          if ( result !== true ) {
            result = this.calculateWinnerFrom(i+1, j+1, cell, 'up-right',   3);
          }
          if ( result !== true ) {
            result = this.calculateWinnerFrom(i,   j+1, cell, 'up',         3);
          }
          if ( result !== true ) {
            result = this.calculateWinnerFrom(i+1, j-1, cell, 'down-right', 3);
          }
          if (result === true ) {
            console.log('qualcuno ha vinto!');
            return cell;
          }
        }
      }

    }
    return false;
  }

  calculateWinnerFrom(i, j, sign, direction, points ) { 
    const cols = this.state.cells.length;
    const rows = cols.length;
    let result = false;

    if ( i > cols || j > rows || j < 0 || i < 0 ) return false;

    const cell = this.state.cells[i][j];

    if ( sign != cell ) {
      //console.log('il segno è diverso, ritorno indietro');
      return false;
    }

    if ( points == 1 && cell == sign ) {
      result = true;
      //console.log('avrei trovato un ivncitore');
    } else {

      console.log(`Verifico cella (${i},${j}) punti:${points}`);
      
      if ( direction == 'right' ) {
        result = this.calculateWinnerFrom(i+1, j,   cell, 'right',  points - 1 );
      }    
      if ( direction == 'up-right' ) {
        result = this.calculateWinnerFrom(i+1, j+1, cell, 'up-right',  points - 1 );
      }    
      if ( direction == 'up' ) {
        result = this.calculateWinnerFrom(i,   j+1, cell, 'up',  points - 1 );
      }    
      if ( direction == 'down-right' ) {
        result = this.calculateWinnerFrom(i+1, j-1, cell, 'down-right',  points - 1 );
      }    
    }
    console.log(result);
    return result;
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
