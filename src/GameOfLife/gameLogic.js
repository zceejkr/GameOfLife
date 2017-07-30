	export function getNewBoard(board) {
		var newBoard = createBoard(board.length, board[0].length)

		for (var i = 0; i<board.length; i++) {
			for (var j = 0; j<board[0].length; j++) {
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
					neighbours.push(value);
				}
			} catch(err){}
		} 
		return neighbours;
	}

	function getNextState(neighbours, alive) {
		var liveNeighbours = neighbours.filter((n) => {return n});
		var n = liveNeighbours.length;

		if (alive) {
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

	export function createBoard(n, m) {
		var board = Array(n);
		for (var i=0; i<n; i++) {
			board[i] = Array(m).fill(false);
		}
		return board;
	}