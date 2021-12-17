// =============== React & Next ===============
import * as React from 'react';
import ReactDOM from 'react-dom';
import type { GetStaticProps, NextPage } from 'next';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import Modal from 'components/Modal/custom';
// ============================================
import { plan, scanPlans, Stream, stream, streamProps } from 'react-streams';
import { combineSources } from 'react-streams';
import { pluck } from 'rxjs/operators';
import { map, filter } from 'rxjs/operators';
import { delay, mapTo, startWith } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { interval, of, pipe } from 'rxjs';
import TicTacToe from 'Games/TikTakToe';
// import { InputBox, MyRxJS } from './experiment';

// ============================================

const Tests: NextPage = () => {
	const { t } = useTranslation('common');

	const [isOpen, setIsOpen] = React.useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const games = [{ title: 'Tic-Tac-Toe', game: <TicTacToe /> }];

	// const getBob = async () => {
	// 	const bob = await require('./bob.json');
	// 	console.log(await bob);
	// 	return bob
	// };

	// React.useEffect(() => {
	// 	getBob();
	// }, []);
	return (
		<PageLayout title={t('title')}>
			{/* <button onClick={openModal}>Open Modal</button> */}

			{/* <Modal title={games[0].title} isOpen={isOpen} closeModal={closeModal}>
				{games[0].game}
			</Modal> */}
			{/* 
			<Modal
				// title={'RxJS Counter'}
				isOpen={isOpen}
				toggle={closeModal}>
				<TicTacToe />
			</Modal> */}

			{/* <MyRxJS bob={getBob} /> */}

			{/* <InputBox /> */}

			{null ? null : null}
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'common',
			'footer',
		])),
	},
});

export default Tests;

// // const count$ = interval(250).pipe(map((count) => ({ count })));

// // const Counter = stream(count$);

// // export const MyRxJS = () => (
// // 	<div>
// // 		<h2>Subscribe to a Stream</h2>
// // 		<Counter>{({ count }) => <div>{count}</div>}</Counter>
// // 	</div>
// // );

// // const mapGreeting = map(({ greeting, name }) => ({
// // 	message: `${greeting}, ${name}!`,
// // }));

// // const HelloWorld = streamProps(mapGreeting);

// // const RXJS = () => (
// // 	<div>
// // 		<h2>Stream Props to Children</h2>
// // 		<HelloWorld greeting="Hello" name="world">
// // 			{({ message }) => <div>{message}</div>}
// // 		</HelloWorld>
// // 		<HelloWorld greeting="Bonjour" name="John">
// // 			{({ message }) => <div>{message}</div>}
// // 		</HelloWorld>
// // 	</div>
// // );

// const message$ = of({ message: 'Hello' });
// const on = plan(mapTo({ message: 'On' }));
// const off = plan(mapTo({ message: 'Off' }));
// const state$ = message$.pipe(scanPlans({ on, off }));

// const { Consumer } = React.createContext({ state$, on, off });

// const MyRxJS = () => (
// 	<div>
// 		<Consumer>
// 			{({ state$ }) => (
// 				<Stream source={state$}>
// 					{({ message }) => <div id="message">{message}</div>}
// 				</Stream>
// 			)}
// 		</Consumer>

// 		<div>
// 			<div>
// 				<div>
// 					<Consumer>
// 						{(event) => (
// 							<div>
// 								{console.log(event)}
// 								{/* <button onClick={on} aria-label="change message to on">
// 									bob
// 								</button>
// 								{console.log(props)}
// 								<button onClick={on} aria-label="change message to on">
// 									On
// 								</button>
// 								<button onClick={off} aria-label="change message to off">
// 									Off
// 								</button> */}
// 							</div>
// 						)}
// 					</Consumer>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// );
// // ===================================================================
// const InputBox = () => {
// 	React.useEffect(() => {
// 		const click$ = fromEvent(
// 			document.getElementById('clickMe'),
// 			'click',
// 		).subscribe((clickety) => console.log({ clickety }));
// 		return () => click$.unsubscribe();
// 	}, []);

// 	return (
// 		<button id="clickMe" type="button">
// 			Click Me
// 		</button>
// 	);
// };
