import * as React from 'react';
import { Board as Container, IconWrapper, PlayerSign } from '../styles';
import { faDotCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Players } from '../constants';

const Tile = ({
	clickHandler,
	tile: { id, value, winningPattern },
}: TileProps) => (
	<IconWrapper
		id="gameTile"
		className="gameTile"
		onClick={() => clickHandler(id)}
		winningPattern={winningPattern}>
		{value && (
			<PlayerSign
				icon={value === Players.X ? faTimesCircle : faDotCircle}
				winningpattern={`${winningPattern}`}
			/>
		)}
	</IconWrapper>
);

const Board = ({ board, clickHandler }: BoardProps) => (
	<Container>
		{board.map((tile) => (
			<Tile key={tile.id} tile={tile} clickHandler={clickHandler} />
		))}
	</Container>
);

export default Board;
