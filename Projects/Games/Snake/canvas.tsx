import * as C from './constants';
// canvas
export const renderScene = (
	ctx: CanvasRenderingContext2D | null,
	scene: Scene,
) => {
	if (!ctx) return;
	renderBackground(ctx);
	renderScore(ctx, scene.score);
	renderApples(ctx, scene.apples);
	renderSnake(ctx, scene.snake);
};

export const renderScore = (ctx: CanvasRenderingContext2D, score: number) =>
	drawText(
		ctx,
		score.toString(),
		C.CANVAS_WIDTH / 2,
		C.CANVAS_HEIGHT / 2,
		'rgba(0, 0, 0, 0.1)',
		150,
	);

export const renderApples = (ctx: CanvasRenderingContext2D, apples: any[]) =>
	apples.forEach((apple) => paintCell(ctx, apple, 'red'));

export const renderSnake = (
	ctx: CanvasRenderingContext2D,
	snake: Array<Point2D>,
) =>
	snake.forEach((segment, index) =>
		paintCell(ctx, wrapBounds(segment), getSegmentColor(index)),
	);
export const renderGameOver = (ctx: CanvasRenderingContext2D | null) => {
	if (!ctx) return;
	ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
	ctx.fillRect(0, 0, C.CANVAS_WIDTH, C.CANVAS_HEIGHT);

	let textX = C.CANVAS_WIDTH / 2;
	let textY = C.CANVAS_HEIGHT / 2;

	drawText(ctx, 'GAME OVER!', textX, textY, 'black', 25);
};

export const getRandomPosition = (snake: Array<Point2D> = []): Point2D => {
	let position = {
		x: getRandomNumber(0, C.COLS - 1),
		y: getRandomNumber(0, C.ROWS - 1),
	};

	if (isEmptyCell(position, snake)) return position;

	return getRandomPosition(snake);
};

export const checkCollision = (a: Point2D, b: Point2D) =>
	a.x === b.x && a.y === b.y;

const isEmptyCell = (position: Point2D, snake: Array<Point2D>): boolean =>
	!snake.some((segment) => checkCollision(segment, position));

const getRandomNumber = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min);

const renderBackground = (ctx: CanvasRenderingContext2D) => {
	ctx.fillStyle = '#EEE';
	ctx.fillRect(0, 0, C.CANVAS_WIDTH, C.CANVAS_HEIGHT);
};

const drawText = (
	ctx: CanvasRenderingContext2D,
	text: string,
	x: number,
	y: number,
	fillStyle: string,
	fontSize: number,
	horizontalAlign: CanvasTextAlign = 'center',
	verticalAlign: CanvasTextBaseline = 'middle',
) => {
	ctx.fillStyle = fillStyle;
	ctx.font = `bold ${fontSize}px sans-serif`;

	ctx.textAlign = horizontalAlign;
	ctx.textBaseline = verticalAlign;

	ctx.fillText(text, x, y);
};

const getSegmentColor = (index: number) => (index === 0 ? 'black' : '#2196f3');

const wrapBounds = ({ x, y }: Point2D) => ({
	x: x >= C.COLS ? 0 : x < 0 ? C.COLS - 1 : x,
	y: y >= C.ROWS ? 0 : y < 0 ? C.ROWS - 1 : y,
});

const paintCell = (
	ctx: CanvasRenderingContext2D,
	point: Point2D,
	color: string,
) => {
	const x = point.x * C.CELL_SIZE + point.x * C.GAP_SIZE;
	const y = point.y * C.CELL_SIZE + point.y * C.GAP_SIZE;

	ctx.fillStyle = color;
	ctx.fillRect(x, y, C.CELL_SIZE, C.CELL_SIZE);
};
