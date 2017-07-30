import React, { Component } from 'react';
import './GameOfLife.css';
import {getNewBoard} from './gameLogic'

class GameOfLife extends Component {
	render() {
		return (
			<div> <Board size={50}/></div>
			);
	}
}

class Board extends React.Component {

	constructor(props) {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.updateIfRunning = this.updateIfRunning.bind(this);
		this.createBoard(props.size);
		this.state = {running: false};
		this.getNewBoard = getNewBoard;
	}

	createBoard(size) {
		var rows = Array(size);
		for (var i=0; i<size; i++) {
			rows[i] = Array(size).fill(false);
		}
		this.board = rows;
	}

	updateIfRunning() {
		if(true) {
			setInterval(() => {
					this.board = this.getNewBoard(this.board)
					this.forceUpdate();
				}, 300);
		}
	}

	renderLiveSquare(value, id) {
		return (
		  <LiveSquare value={value} onClick={this.handleClick} id={id}/>
		);
	}

	renderDeadSquare(value, id) {
		return (
		  <DeadSquare value={value} onClick={this.handleClick} id={id}/>
		);
	}

	handleClick(event) {
		var x = event.target.id.split(",")[0];
		var y = event.target.id.split(",")[1];
		this.board[x][y] = !this.board[x][y]
		this.forceUpdate();
	}

	renderBoard() {
		var board = [];
		for (var i = 0; i < this.board.length; i++) {
			var row = [];
			for (var j = 0; j < this.board[0].length; j++) {
				if (this.board[j][i] === true) {
					var square = this.renderLiveSquare("", [j,i]);
				} else {
					var square = this.renderDeadSquare("", [j,i]);
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

	handleStart() {
		this.setState({running:true});
	}

	render() {
		console.log("rendering")
		return (
			<div>
			  <div>
			    {this.renderBoard()}
			  </div>
			  <div>
			  	<button onClick={this.updateIfRunning}>
			  		Start!
			  	</button>
			  </div>
			</div>
		);
	}
}

function LiveSquare(props) {
  return (
    <button className="livesquare" onClick={props.onClick} id={props.id}>
      {props.value}
    </button>
  );
}

function DeadSquare(props) {
  return (
    <button className="deadsquare" onClick={props.onClick} id={props.id}>
      {props.value}
    </button>
  );
}



export default GameOfLife;