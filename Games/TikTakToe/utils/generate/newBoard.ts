export const newBoard = () =>
	Array(9)
		.fill(null)
		.map((value, index) => ({
			id: index,
			value,
			winningPattern: false,
		}));
