import React, { Component } from 'react';
import './Column.css';
import Cell from '../Cell/Cell';

class Column extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: this.props.cells.length
    }
    this.handleClick = this.handleClick.bind(this);
  }

  updateGame() {
    if(this.state.current >= 0){
      this.props.addCell( this.state.current);
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({current: prevState.current -1}), this.updateGame );
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

