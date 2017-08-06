import React, { Component } from 'react';
import './GameOfLife.css';
import Board from './Board';

class GameOfLife extends Component {
	render() {
		return (
			<div> <Board size={40} interval={1000} /></div>
			);
	}
}





export default GameOfLife;