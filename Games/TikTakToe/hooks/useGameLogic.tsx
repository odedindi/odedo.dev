// =============== React & Next ===============
import * as React from 'react';
// ================== utils =================
import * as Utils from '../utils';
import confetti from 'canvas-confetti';
// ================= constants ================
import { GameModes, GameModes as Modes, Players } from '../constants';
// ============================================

const useGameLogic: UseGameLogic = () => {
	const [state, setState] = React.useState<GameState>(() => ({
		board: Utils.newBoard(),
		computerPlayer: Players.O,
		computerShouldMove: false,
		currentPlayer: Players.X,
		gameOver: false,
		mode: Modes.computer,
		scoreTable: Utils.newScoreTable(),
		win: null,
	}));

	const toggleMode = () =>
		setState((prev) => ({
			...prev,
			mode: prev.mode === Modes.computer ? Modes.doublePlayer : Modes.computer,
		}));

	const toggleComputerShouldMove = (bool: boolean) =>
		setState((prev) => ({
			...prev,
			computerShouldMove: bool,
		}));

	const startNewGame = () =>
		setState((prev) => ({
			...prev,
			board: Utils.newBoard(),
			gameOver: false,
			win: null,
		}));

	const updateBoard = (tileID: GameTile['id'], newValue: Player) =>
		setState((prev) => {
			const newState = { ...prev };
			newState.board[tileID].value = newValue;
			return newState;
		});

	const nextPlayer = React.useCallback(
		() =>
			setState((prev) => ({
				...prev,
				currentPlayer:
					state.currentPlayer === Players.X ? Players.O : Players.X,
			})),
		[state.currentPlayer],
	);

	const updateBoardWithWinningPattern = React.useCallback(
		(pattern: number[]) => {
			setState((prev) => {
				const newState = { ...prev };
				pattern.forEach((id) => {
					confetti({
						angle: Utils.randRange(55, 125),
						spread: Utils.randRange(50, 70),
						particleCount: Utils.randRange(50, 100),
						origin: { y: 0.6 },
					});
					newState.board[id].winningPattern = true;
				});
				return newState;
			});
			confetti.reset();
		},
		[],
	);

	const resetScoreTable = () =>
		setState((prev) => ({ ...prev, scoreBoard: Utils.newScoreTable() }));

	const handleMove = React.useCallback(
		(tileID: GameTile['id'], player: Player) => {
			const { computerPlayer, computerShouldMove, mode, win } = state;
			console.log(
				`tile: ${tileID}, player: ${player}, computerPlayer: ${computerPlayer}, computerShouldMove: ${computerShouldMove}`,
			);
			updateBoard(tileID, player);
			if (!win) {
				console.log('no winner yet');
				switch (mode) {
					case GameModes.doublePlayer:
						return nextPlayer();
					case GameModes.computer:
						if (player !== computerPlayer)
							return toggleComputerShouldMove(true);
					default:
						return;
				}
			}
		},
		[nextPlayer, state],
	);

	const handleClick = React.useCallback(
		(tileID: GameTile['id']) => {
			console.log('tileID: ', tileID);
			const { board, currentPlayer, gameOver, win } = state;

			// all cases to stop:
			// 1. its the computer's turn but the user clicks on the board
			// 2. the game is over
			// 3. the chosen tile was clicked before
			if (win || gameOver) return;
			if (board[tileID].value) return;
			handleMove(tileID, currentPlayer);
		},
		[handleMove, state],
	);

	const getComputerMove = React.useCallback(() => {
		const difficulties = ['random', 'impossible'];
		const difficulty = difficulties[1];
		const { board, computerPlayer, computerShouldMove, mode } = state;
		if (!computerShouldMove) return;

		const winNextMove = Utils.isWinNextMove(state);
		if (difficulty === 'impossible') {
			if (winNextMove) handleMove(winNextMove, computerPlayer);
			else {
				const bestMove = Utils.getBestMove(state);
				console.log('bestMove: ', bestMove);
				handleMove(bestMove, computerPlayer);
			}
		}
		if (difficulty === 'random') {
			if (winNextMove) handleMove(winNextMove, computerPlayer);
			else {
				const emptyCells = Utils.getEmptyCells(board);
				const randomEmptyCell =
					emptyCells[Utils.randRange(0, emptyCells.length)];
				handleMove(randomEmptyCell.id, computerPlayer);
			}
		}
		toggleComputerShouldMove(false);
	}, [handleMove, state]);

	React.useEffect(() => {
		let timeToMove: NodeJS.Timeout;
		if (state.mode === Modes.computer && state.computerShouldMove && !state.win)
			timeToMove = setTimeout(() => getComputerMove(), 500);
		return () => {
			clearTimeout(timeToMove);
		};
	}, [getComputerMove, state.computerShouldMove, state.mode, state.win]);

	const handleGameEnded = React.useCallback(
		(win?: { player: Player; winningPattern: number[] } | null) =>
			// if game ended with a win, call fn with winner information as argument
			// if game ended in a tie, call fn with no argumentes
			win
				? setState((prev) => ({
						...prev,
						gameOver: true,
						win: win,
						scoreTable: {
							...prev.scoreTable,
							[win.player]: ++prev.scoreTable[win.player],
						},
				  }))
				: setState((prev) => ({
						...prev,
						gameOver: true,
						scoreTable: {
							...prev.scoreTable,
							ties: ++prev.scoreTable.ties,
						},
				  })),
		[],
	);

	// watch for a end of a game
	React.useEffect(() => {
		const { board, gameOver } = state;
		if (!gameOver) {
			const winner = Utils.validateResult(board);
			if (winner) {
				handleGameEnded(winner);
				updateBoardWithWinningPattern(winner.winningPattern);
			}
			const tie = Utils.isBoardFull(board);
			if (tie) {
				handleGameEnded();
			}
		}
	}, [state, handleGameEnded, updateBoardWithWinningPattern]);

	return {
		state,
		controllers: {
			handleClick,
			resetScoreTable,
			startNewGame,
			toggleMode,
		},
	};
};

export default useGameLogic;
