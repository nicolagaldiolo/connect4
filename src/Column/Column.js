import React, { Component } from 'react';
import './Column.css';
import Cell from '../Cell/Cell';

class Column extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: -1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  updateGame() {
    this.props.addCell(this.state.current);
    console.log(`The column was clicked. current: ${this.state.current}`);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({current: prevState.current + 1}), this.updateGame );
  }

  render() {
    const cells = [];
    for( let i=0; i < this.props.cells.length; i++){
      const value = this.props.cells[i];
      cells.push(<Cell key={i} value={value}/>)
    }
    return (
      <div className="Column" onClick={this.handleClick}>
        {cells}
      </div>
    );
  }
}

export default Column;

