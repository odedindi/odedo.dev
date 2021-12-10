import { validateResult, isBoardFull } from '..';

export const getBestMove = (state: GameState) => {
	const { board, computerPlayer: computer, currentPlayer: human } = state;

	const simulationBoard = [...board];
	const minMax = (board: GameTile[], player: Player, root?: true) => {
		if (isBoardFull(board)) return 0;
		const winner = validateResult(board);
		if (winner) {
			if (winner.player === player) return 1;
			else return -1;
		}

		const possibleMoves: GameTile[] = board.filter(({ value }) => !value);
		if (!possibleMoves.length) return 0;
		let bestMove: number = -1;
		let tempScore: number = 100;
		possibleMoves.forEach((move) => {
			// play
			board[move.id].value = player;
			// check if move is good
			const otherPlayer = player === computer ? human : computer;
			const tempResult = minMax(board, otherPlayer);
			// cancel last play
			board[move.id].value = null;
			if (tempResult < tempScore) {
				tempScore = tempResult;
				bestMove = move.id;
			}
		});
		if (root) console.log('best move found: ', bestMove);
		if (root) return bestMove;
		return tempScore;
	};

	return minMax(simulationBoard, computer, true);
};
