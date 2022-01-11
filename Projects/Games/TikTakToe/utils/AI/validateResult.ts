export const validateResult = (tiles: GameTile[]) => {
	const winningPatterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (const winningPattern of winningPatterns) {
		const [a, b, c] = winningPattern;
		if (
			tiles[a].value &&
			tiles[a].value === tiles[b].value &&
			tiles[a].value === tiles[c].value
		) {
			return {
				player: tiles[a].value as Player,
				winningPattern,
			};
		}
	}
	return null;
};
