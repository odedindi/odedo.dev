import * as React from 'react';
import { Score, Scores } from '../styles';
import { GameModes, Players } from '../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';

type ScoreProps = {
	scores: {
		X: number;
		ties: number;
		O: number;
	};
	mode: GameMode;
};

const UserIcon = () => <FontAwesomeIcon icon={faUser} />;
const BotIcon = () => <FontAwesomeIcon icon={faRobot} />;
const ScoreTable = ({ mode, scores }: ScoreProps) => (
	<Scores>
		<Score>
			<p>
				<UserIcon /> <strong>{Players.X}</strong>
			</p>
			<h4>{scores.X}</h4>
		</Score>
		<Score>
			<p>Ties</p>
			<h4>{scores.ties}</h4>
		</Score>
		<Score>
			<p>
				{mode === GameModes.doublePlayer ? <UserIcon /> : <BotIcon />}
				<strong>{Players.O}</strong>
			</p>
			<h4>{scores.O}</h4>
		</Score>
	</Scores>
);

export default ScoreTable;
