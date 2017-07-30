	export function getNewBoard(board) {
		var size = board.length
		var newBoard = Array(size);
		for (var i=0; i<size; i++) {
			newBoard[i] = Array(size).fill(false);
		}


		for (var i = 0; i<board.length; i++) {
			for (var j = 0; j<board.length; j++) {
				newBoard[i][j] = getNextState(getNeighbours(board, i, j), board[i][j]);
			}
		}

		return newBoard;
	}

	function getNeighbours(board, x, y) {
		var neighbours = [];
		var neighbourIDs = [[x-1, y-1], [x, y-1], [x+1, y-1], 
							[x-1, y], [x+1, y],
							[x-1, y+1], [x, y+1], [x+1, y+1]];
		for (var i = 0; i < neighbourIDs.length; i++) {
			try {
				var id = neighbourIDs[i];
				var value = board[id[0]][id[1]];
				if (value !== undefined) {
					neighbours.push(board[id[0]][id[1]]);
				}
			} catch(err){}
		} 
		return neighbours;
	}

	function getNextState(neighbours, current) {
		var liveNeighbours = neighbours.filter((n) => {return n});
		var n = liveNeighbours.length;

		if (current) {
			if (n<2 || n>3) {
				return false;
			} else {
				return true;
			}
		} else {
			if (n === 3) {
				return true;
			} else {
				return false;
			}
		}
	}