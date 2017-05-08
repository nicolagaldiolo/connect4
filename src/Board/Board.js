import React, { Component } from 'react';
import './Board.css';
import Column from '../Column/Column';

class Board extends Component {

  constructor(props) {
    super(props);

    this.columnClicked = this.columnClicked.bind(this);
  }

  columnClicked(col, row) {
    this.props.addCell(col, row);
  }

  render() {
    const columns = [];
    for(let i = 0; i < this.props.cells.length; i++){
      const column = this.props.cells[i];
      columns.push(<Column key={i} cells={column}  addCell={(row) => this.columnClicked(i,row) }/>) 
    }
    return (
      <div className="Board">
        {columns}
      </div>
    );
  }
}

export default Board;
