import React, { Component } from 'react';
import './Column.css';
import Cell from '../Cell/Cell';

class Column extends Component {
  render() {

    const Cell = [];
    for( let i=0; i < Number.parseInt(this.props.Cells, 10); i++){
      Cell.push(<Cell key={i}/>)
    }
    return (
      <div className="Column">
        {Cell}
      </div>
    );
  }
}

export default Column;

