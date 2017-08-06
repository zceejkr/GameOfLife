import React, { Component } from 'react';
import {getNewBoard, createBoard} from './gameLogic';

class Board extends Component {

	constructor(props) {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.startRunning = this.startRunning.bind(this);
		this.state = {board: createBoard(props.size, props.size)};
		this.getNewBoard = getNewBoard;
	}

	startRunning() {
		setInterval(() => {
				this.setState({...this.state, board: this.getNewBoard(this.state.board)})
			}, this.props.interval);
	}


	handleClick(event) {
		var x = event.target.id.split(",")[0];
		var y = event.target.id.split(",")[1];

		var newboard = this.state.board;
		newboard[x][y] = !newboard[x][y];
		var newState = {...this.state, board:newboard};

		this.setState(newState);
	}



	renderSquare(isAlive, id) {
		return (
		  <Square isAlive={isAlive} onClick={this.handleClick} id={id}/>
		);
	}

	renderBoard() {
		var board = [];
		for (var i = 0; i < this.state.board.length; i++) {
			var row = [];
			for (var j = 0; j < this.state.board[0].length; j++) {
				var square;
				if (this.state.board[j][i]) {
					square = this.renderSquare(true, [j,i]);
				} else {
					square = this.renderSquare(false, [j,i]);
				}
				row.push(square);
			}
			board.push((
				<div className="board-row">
				 	{row}
				 </div>
				));
		}
		return board;
	}

	render() {
		console.log("rendering")
		return (
			<div style={{height: 20*this.props.size, width: 20*this.props.size, margin: 'auto'}}>
			  <div>
			    {this.renderBoard()}
			  </div>
			  <div>
			  	<button onClick={this.startRunning}>
			  		Start!
			  	</button>
			  </div>
			</div>
		);
	}
}

function Square(props) {
	var liveStyle = {
		height: 20,
  		width: 20,
  		background: "black"
	}

	var deadStyle = {
		height: 20,
  		width: 20,
  		background: "white"
	}

	if(props.isAlive) {
		return (
			<button style={liveStyle} onClick={props.onClick} id={props.id} />
		);
	} else {
		return (
			<button style={deadStyle} onClick={props.onClick} id={props.id} />
		);
	}
}

export default Board;