import * as React from 'react';
import { plan, scanPlans, Stream, stream, streamProps } from 'react-streams';
import { combineSources } from 'react-streams';
import { pluck } from 'rxjs/operators';
import { map, filter } from 'rxjs/operators';
import { delay, mapTo, startWith } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { interval, of, pipe } from 'rxjs';

// const count$ = interval(250).pipe(map((count) => ({ count })));

// const Counter = stream(count$);

// export const MyRxJS = () => (
// 	<div>
// 		<h2>Subscribe to a Stream</h2>
// 		<Counter>{({ count }) => <div>{count}</div>}</Counter>
// 	</div>
// );

// const mapGreeting = map(({ greeting, name }) => ({
// 	message: `${greeting}, ${name}!`,
// }));

// const HelloWorld = streamProps(mapGreeting);

// const RXJS = () => (
// 	<div>
// 		<h2>Stream Props to Children</h2>
// 		<HelloWorld greeting="Hello" name="world">
// 			{({ message }) => <div>{message}</div>}
// 		</HelloWorld>
// 		<HelloWorld greeting="Bonjour" name="John">
// 			{({ message }) => <div>{message}</div>}
// 		</HelloWorld>
// 	</div>
// );

const message$ = of({ message: 'Hello' });
const on = plan(mapTo({ message: 'On' }));
const off = plan(mapTo({ message: 'Off' }));
const state$ = message$.pipe(scanPlans({ on, off }));

const { Consumer } = React.createContext({ state$, on, off });

export const MyRxJS = () => (
	<div>
		<Consumer>
			{({ state$ }) => (
				<Stream source={state$}>
					{({ message }) => <div id="message">{message}</div>}
				</Stream>
			)}
		</Consumer>

		<div>
			<div>
				<div>
					<Consumer>
						{(event) => (
							<div>
								{console.log(event)}
								{/* <button onClick={on} aria-label="change message to on">
									bob
								</button>
								{console.log(props)}
								<button onClick={on} aria-label="change message to on">
									On
								</button>
								<button onClick={off} aria-label="change message to off">
									Off
								</button> */}
							</div>
						)}
					</Consumer>
				</div>
			</div>
		</div>
	</div>
);
// ===================================================================
export const InputBox = () => {
	React.useEffect(() => {
		const click$ = fromEvent(
			document.getElementById('clickMe'),
			'click',
		).subscribe((clickety) => console.log({ clickety }));
		return () => click$.unsubscribe();
	}, []);

	return (
		<button id="clickMe" type="button">
			Click Me
		</button>
	);
};
