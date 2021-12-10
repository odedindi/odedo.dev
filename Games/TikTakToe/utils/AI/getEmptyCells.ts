export const getEmptyCells = (tiles: GameTile[]): GameTile[] =>
	tiles.filter((tile) => !tile.value);

export const isBoardFull = (tiles: GameTile[]): boolean =>
	getEmptyCells(tiles).length === 0;
