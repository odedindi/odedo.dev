export const COLS = 30;
export const ROWS = 30;
export const GAP_SIZE = 1;
export const CELL_SIZE = 10;
export const CANVAS_WIDTH = COLS * (CELL_SIZE + GAP_SIZE);
export const CANVAS_HEIGHT = ROWS * (CELL_SIZE + GAP_SIZE);
export const DIRECTIONS: Directions = {
	ArrowLeft: { x: -1, y: 0 }, // Left Arrow
	ArrowRight: { x: 1, y: 0 }, // Right Arrow
	ArrowUp: { x: 0, y: -1 }, // Up Arrow
	ArrowDown: { x: 0, y: 1 }, // Down Arrow
};
export const INITIAL_DIRECTION = DIRECTIONS.ArrowRight;
export const SNAKE_LENGTH = 4;

export const APPLE_COUNT = 2;
export const POINTS_PER_APPLE = 1;

export const SPEED = 200;
export const FPS = 60;
