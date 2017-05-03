import React, { Component } from 'react';
import './Column.css';
import Cell from '../Cell/Cell';

class Column extends Component {
  render() {

    const cells = [];
    for( let i=0; i < Number.parseInt(this.props.cells, 10); i++){
      cells.push(<Cell key={i}/>)
    }
    return (
      <div className="Column">
        {cells}
      </div>
    );
  }
}

export default Column;

