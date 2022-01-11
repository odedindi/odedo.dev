import * as React from 'react';
import { createInputMap, inputReducer, transposeMapping } from './helpers';

export const TICK = 16;

export const useInput = <M extends Mapping>(
	mapping: M,
	callbacks: InputCallbackMap<M> = {} as InputCallbackMap<M>,
) => {
	const mappingT = React.useMemo(() => transposeMapping(mapping), [mapping]);
	const held = React.useRef(
		{} as { [Property in InputMapKey<M>]: NodeJS.Timer },
	);

	const [state, dispatch] = React.useReducer(
		inputReducer,
		React.useMemo(() => createInputMap(mapping), [mapping]),
	);

	const onKeyDown = React.useCallback(
		(ev: KeyboardEvent) => {
			if (mappingT[ev.key] && !ev.repeat) {
				mappingT[ev.key].forEach((a: InputMapKey<M>) => {
					dispatch({ type: 'pressed', action: a as any });
					setTimeout(() => {
						dispatch({ type: 'pressed-timeout', action: a as any });
					}, TICK);

					const onPressed = callbacks[a]?.onPressed;
					if (onPressed) {
						onPressed();
					}

					if (held.current[a]) {
						clearInterval(held.current[a]);
					}
					held.current[a] = setInterval(() => {
						const onHeld = callbacks[a]?.onHeld;
						if (onHeld) {
							onHeld();
						}
					}, TICK);
				});
			}
		},
		[dispatch, mappingT, callbacks],
	);
	const onKeyUp = React.useCallback(
		(ev: KeyboardEvent) => {
			if (mappingT[ev.key] && !ev.repeat) {
				mappingT[ev.key].forEach((a) => {
					dispatch({ type: 'released', action: a });
					setTimeout(() => {
						dispatch({ type: 'released-timeout', action: a });
					}, TICK);
					if (held.current[a]) {
						clearInterval(held.current[a]);
					}

					const onReleased = callbacks[a]?.onReleased;
					if (onReleased) {
						onReleased();
					}
				});
			}
		},
		[dispatch, mappingT, callbacks],
	);

	React.useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		document.addEventListener('keyup', onKeyUp);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.removeEventListener('keyup', onKeyUp);
		};
	}, [onKeyDown, onKeyUp]);

	return state;
};
