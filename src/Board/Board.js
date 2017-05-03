import React, { Component } from 'react';
import './Board.css';
import Column from '../Column/Column';

class Board extends Component {
  render() {
    const columns = [];
    for(let i = 0; i < Number.parseInt(this.props.cols, 10); i++){
      columns.push(<Column key={i} cells="7"/>) 
    }
    return (
      <div className="Board">
        {columns}
      </div>
    );
  }
}

export default Board;
