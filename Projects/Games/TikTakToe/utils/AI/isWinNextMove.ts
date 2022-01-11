import { validateResult } from '..';

export const isWinNextMove = (state: GameState) => {
	const { board, computerPlayer: computer } = state;
	const simulationBoard = [...board];
	const possibleMoves = simulationBoard.filter(({ value }) => !value);

	if (!possibleMoves) return false;
	for (const move of possibleMoves) {
		simulationBoard[move.id].value = computer;
		const win = validateResult(simulationBoard);
		if (win) return move.id;
		simulationBoard[move.id].value = null;
	}
	return false;
};
