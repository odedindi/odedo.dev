import { checkCollision, getRandomPosition } from './canvas';
import * as C from './constants';
// utils
export const isGameOver = ({ snake }: Scene) => {
	const head = snake[0];
	const body = snake.slice(1, snake.length);

	return body.some((segment) => {
		return checkCollision(segment, head);
	});
};

export const nextDirection = (previous: Point2D, next: Point2D) => {
	const isOpposite = (previous: Point2D, next: Point2D) =>
		next.x === previous.x * -1 || next.y === previous.y * -1;

	if (isOpposite(previous, next)) return previous;
	return next;
};

export const move = (
	snake: Point2D[],
	[direction, snakeLength]: [Point2D, number],
) => {
	const nx = snake[0].x + 1 * direction.x;
	const ny = snake[0].y + 1 * direction.y;

	// nx += 1 * direction.x;
	// ny += 1 * direction.y;
	const getTail = () => {
		if (snakeLength > snake.length) return {};
	};
	let tail;

	if (snakeLength > snake.length) tail = { x: nx, y: ny };
	else {
		tail = snake.pop() as Point2D;
		tail.x = nx;
		tail.y = ny;
	}

	snake.unshift(tail);
	return snake;
};

export const eat = (apples: Point2D[], snake: Point2D[]) => {
	let head = snake[0];

	for (let i = 0; i < apples.length; i++) {
		if (checkCollision(apples[i], head)) {
			apples.splice(i, 1);
			return [...apples, getRandomPosition(snake)];
		}
	}

	return apples;
};

export const generateSnake = () =>
	Array.from({ length: C.SNAKE_LENGTH }, (_, i) => ({ x: i, y: 0 }));

export const generateApples = (): Array<Point2D> =>
	Array.from({ length: C.APPLE_COUNT }, (_) => getRandomPosition());
