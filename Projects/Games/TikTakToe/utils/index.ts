import { chooseRandom } from './AI/chooseRandom';
import { getBestMove } from './AI/getBestMove';
import { getEmptyCells } from './AI/getEmptyCells';
import { isBoardFull } from './AI/getEmptyCells';
import { isWinNextMove } from './AI/isWinNextMove';
import { newBoard } from './generate/newBoard';
import { newScoreTable } from './generate/newScoreTable';
import { randRange } from './AI/randRange';
import { validateResult } from './AI/validateResult';

export {
	chooseRandom,
	getBestMove,
	getEmptyCells,
	isBoardFull,
	isWinNextMove,
	newBoard,
	newScoreTable,
	randRange,
	validateResult,
};
