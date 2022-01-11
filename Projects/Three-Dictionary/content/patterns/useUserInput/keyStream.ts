import * as React from 'react';
import { EMPTY, fromEvent, interval, merge } from 'rxjs';
import {
	distinctUntilChanged,
	filter,
	groupBy,
	map,
	mergeAll,
	switchMap,
} from 'rxjs/operators';

const keydown$ = fromEvent<KeyboardEvent>(document, 'keydown');
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const key$ = merge(keydown$, keyup$).pipe(
	groupBy((e: KeyboardEvent) => e.key),
	map((group: any) =>
		group.pipe(
			distinctUntilChanged(
				(a, b) => a === b,
				(e: KeyboardEvent) => e.type,
			),
		),
	),
	mergeAll(),
);

const useKeyEvents = (key: string, eventType: string, sink: () => void) => {
	React.useEffect(() => {
		const s = key$
			.pipe(
				filter(
					(ev) =>
						(ev as KeyboardEvent).key === key &&
						(ev as KeyboardEvent).type === eventType &&
						!(ev as KeyboardEvent).repeat,
				),
			)
			.subscribe(sink);
		return () => s.unsubscribe();
	}, [key, eventType, sink]);
};

const useKeyDown = (key: string, sink: () => void) => {
	useKeyEvents(key, 'keydown', sink);
};

const useKeyUp = (key: string, sink: () => void) => {
	useKeyEvents(key, 'keyup', sink);
};

const useKeyHeld = (key: string, intervalMs: number, sink: () => void) => {
	React.useEffect(() => {
		const s = key$
			.pipe(
				filter((ev) => (ev as KeyboardEvent).key === key),
				switchMap((ev) => {
					const kev = ev as KeyboardEvent;
					if (kev.type === 'keydown') {
						return interval(intervalMs);
					} else {
						return EMPTY;
					}
				}),
			)
			.subscribe(sink);
		return () => s.unsubscribe();
	}, [key, intervalMs, sink]);
};

export { key$, useKeyHeld, keydown$, useKeyDown, keyup$, useKeyUp };
