// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from '../styles';
// ================ components ================
import Button from 'components/Button';
import { ModeToggler, ScoreTable } from '.';
// ============================================

const Controllers: React.FC<{
	state: GameState;
	controllers: GameControllers;
}> = ({
	state: { currentPlayer, gameOver, mode, scoreTable, win },
	controllers: { resetScoreTable, startNewGame, toggleMode },
}) => {
	const winner = <strong>{win?.player}</strong>;
	const current = <strong>{currentPlayer}</strong>;
	const informationBoard = win ? (
		<p>Player {winner} Won!</p>
	) : gameOver ? (
		<p> Tie!</p>
	) : (
		<p>current player: {current}</p>
	);

	return (
		<S.Controllers>
			<ModeToggler gameMode={mode} toggleMode={toggleMode} />
			{informationBoard}
			<Button type="Main" text="New Game" onClick={startNewGame} />
			<Button
				disabled={!gameOver ? true : false}
				type="Main"
				text="Reset Scores"
				onClick={resetScoreTable}
			/>
			<ScoreTable mode={mode} scores={scoreTable} />
		</S.Controllers>
	);
};

export default Controllers;
