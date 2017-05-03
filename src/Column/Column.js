import React, { Component } from 'react';
import './Column.css';
import Cell from '../Cell/Cell';

class Column extends Component {
  render() {

    const cells = [];
    for( let i=0; i < this.props.cells.length; i++){
      const value = this.props.cells[i];
      cells.push(<Cell key={i} value={value}/>)
    }
    return (
      <div className="Column">
        {cells}
      </div>
    );
  }
}

export default Column;

