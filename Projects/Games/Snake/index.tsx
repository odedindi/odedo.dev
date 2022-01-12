// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './styles';
import styled from 'styled-components';
// ================ components ================

// ============================================
import Spinner from 'components/Spinner';
import {
	animationFrameScheduler,
	BehaviorSubject,
	fromEvent,
	interval,
	Observable,
} from 'rxjs';
import {
	combineLatestWith,
	distinctUntilChanged,
	filter,
	map,
	scan,
	share,
	skip,
	startWith,
	takeWhile,
	tap,
	withLatestFrom,
} from 'rxjs/operators';
// ============================================

import * as C from './constants';
import { renderScene, renderGameOver } from './canvas';
import {
	isGameOver,
	nextDirection,
	move,
	eat,
	generateSnake,
	generateApples,
} from './utils';

const Snake = () => {
	const canvasRef = React.useRef<HTMLCanvasElement>(undefined!);
	const [ctx, setCtx] = React.useState<CanvasRenderingContext2D | null>(null);
	const ticks$ = interval(C.SPEED); // snake's speed
	const keydown$ = fromEvent<KeyboardEvent>(document, 'keydown'); // user interactions

	const direction$ = keydown$.pipe(
		//Change snake's direction based on the user keypresses
		map(({ key }: KeyboardEvent) => C.DIRECTIONS[key]),
		filter((direction) => !!direction),
		scan(nextDirection),
		startWith(C.INITIAL_DIRECTION),
		distinctUntilChanged(),
	);

	const length$ = new BehaviorSubject<number>(C.SNAKE_LENGTH);
	const snakeLength$ = length$.pipe(
		scan((step, snakeLength) => snakeLength + step),
		share(),
	);

	const score$ = snakeLength$.pipe(
		startWith(0),
		scan((score, _) => score + C.POINTS_PER_APPLE),
	);

	const snake$: Observable<Point2D[]> = ticks$.pipe(
		withLatestFrom(
			direction$,
			snakeLength$,
			(_, direction, snakeLength) =>
				[direction, snakeLength] as [Point2D, number],
		),
		scan(move, generateSnake()),
		share(),
	);

	const apples$: Observable<Point2D[]> = snake$.pipe(
		scan(eat, generateApples()),
		distinctUntilChanged(),
		share(),
	);
	const appleEaten$ = apples$
		.pipe(
			skip(1),
			tap(() => length$.next(C.POINTS_PER_APPLE)),
		)
		.subscribe();

	const scene$ = snake$.pipe(
		combineLatestWith(apples$, score$),
		map(([snake, apples, score]) => ({ snake, apples, score })),
	);
	const timer = interval(1000 / C.FPS, animationFrameScheduler);
	const game$ = scene$
		.pipe(
			withLatestFrom(timer),
			takeWhile((scene) => !isGameOver(scene[0])),
		)
		.subscribe({
			next: (scene) => {
				renderScene(ctx, scene[0]);
			},
			error: (error) => {
				console.error('There has been an error', error);
			},
			complete: () => {
				renderGameOver(ctx);
			},
		});

	React.useEffect(() => {
		setCtx(canvasRef.current.getContext('2d'));
		return () => {
			game$.unsubscribe();
			appleEaten$.unsubscribe();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// React.useEffect(() => {
	// 	if (ctx) {
	// 		game$.subscribe({
	// 			next: (scene) => {
	// 				renderScene(ctx, scene[0]);
	// 			},
	// 			error: (error) => {
	// 				console.error('There has been an error', error);
	// 			},
	// 			complete: () => {
	// 				renderGameOver(ctx);
	// 			},
	// 		});
	// 	}
	// });

	return (
		<S.Canvas width={C.CANVAS_WIDTH} height={C.CANVAS_HEIGHT} ref={canvasRef} />
	);
};

export default Snake;
