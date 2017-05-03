import React, { Component } from 'react';
import './Board.css';
import Column from '../Column/Column';

class Board extends Component {
  render() {
    const columns = [];
    for(let i = 0; i < this.props.cells.length; i++){
      const column = this.props.cells[i];
      columns.push(<Column key={i} cells={column}/>) 
    }
    return (
      <div className="Board">
        {columns}
      </div>
    );
  }
}

export default Board;
