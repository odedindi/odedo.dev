interface Point2D {
	x: number;
	y: number;
}

interface Directions {
	[key: string]: Point2D;
}

interface Scene {
	snake: Point2D[];
	apples: Point2D[];
	score: number;
}
