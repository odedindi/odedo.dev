type Player = 'X' | 'O';

type GameTile = {
	id: number;
	value: Player | null;
	winningPattern: boolean;
};

type HandleClick = (tileID: GameTile['id']) => void;

type BoardProps = {
	board: GameTile[];
	clickHandler: HandleClick;
};

type TileProps = {
	tile: GameTile;
	clickHandler: HandleClick;
};

type ScoreTable = {
	X: number;
	ties: number;
	O: number;
};

type GameMode = 'Computer' | 'Double Player';

type Win = {
	player: Player;
	winningPattern: number[];
};

interface GameState {
	board: GameTile[];
	computerPlayer: Player;
	computerShouldMove: boolean;
	currentPlayer: Player;
	gameOver: boolean;
	mode: GameMode;
	scoreTable: ScoreTable;
	win: Win | null;
}

interface GameControllers {
	handleClick: HandleClick;
	resetScoreTable: () => void;
	startNewGame: () => void;
	toggleMode: () => void;
}
type UseGameLogic = () => {
	state: GameState;
	controllers: GameControllers;
};
