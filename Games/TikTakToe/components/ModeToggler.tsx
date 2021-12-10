import * as React from 'react';
import { ModeIcon, ToggleWrapper, Checkbox, Switch } from '../styles';
import { faPeopleCarry, faRobot } from '@fortawesome/free-solid-svg-icons';
import { GameModes } from '../constants';

type ModeTogglerProps = {
	gameMode: GameMode;
	toggleMode: () => void;
};
const ModeToggler = ({ gameMode, toggleMode }: ModeTogglerProps) => {
	const computerMode: boolean = gameMode === GameModes.computer ? true : false;

	return (
		<ToggleWrapper>
			<ModeIcon icon={faPeopleCarry} checked={!computerMode} />
			<Checkbox checked={computerMode} onChange={toggleMode} />
			<Switch checked={computerMode} onClick={toggleMode} />
			<ModeIcon icon={faRobot} checked={computerMode} />
		</ToggleWrapper>
	);
};

export default ModeToggler;
