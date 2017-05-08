import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  render() {
    
    const classCell = this.props.value == '' ? '' : ' player' + this.props.value;
    
    return (
      <div className={"cell" + classCell} />
    );
  }
}

export default Cell;