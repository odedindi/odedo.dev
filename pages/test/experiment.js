import * as React from 'react';
import { plan, scanPlans, Stream, stream, streamProps } from 'react-streams';
import { map, filter } from 'rxjs/operators';

import { interval, of, pipe } from 'rxjs';
import { delay, mapTo, startWith } from 'rxjs/operators';

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
					{({ message }) => <h2 id="message">{message}</h2>}
				</Stream>
			)}
		</Consumer>

		<div>
			<div>
				<div>
					<Consumer>
						{({ on, off }) => (
							<div>
								<button onClick={on} aria-label="change message to on">
									On
								</button>
								<button onClick={off} aria-label="change message to off">
									Off
								</button>
							</div>
						)}
					</Consumer>
				</div>
			</div>
		</div>
	</div>
);
