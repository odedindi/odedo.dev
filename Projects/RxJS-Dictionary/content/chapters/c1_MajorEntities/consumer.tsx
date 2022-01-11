import FlipOverCard from 'components/FilpOverCard';
import * as React from 'react';
import * as rx from 'rxjs';
// import styled from 'styled-components';
import * as S from './styles';
/*
Major Entities


type Product = any;
	const productsUrl = 'api/products';
	const products$: rx.Observable<Product[]> = rx.from(fetch(productsUrl, { method: 'GET' })).pipe(
			rx.tap(console.log),
			rx.map((val) => val),
		);
	

// meme fetcher
*/

interface Meme {
	author: string;
	nsfw: false;
	postLink: string;
	preview: string[];
	spoiler: false;
	subreddit: string;
	title: string;
	ups: number;
	url: string;
}
interface MemeResponse {
	count?: number;
	memes: Meme[];
}
const getMeme = () => {
	const memeApiUrl = 'https://meme-api.herokuapp.com/gimme/10';
	const fetcher = async () => {
		const res = await fetch(memeApiUrl, { method: 'GET' });
		const data: MemeResponse = await res.json();
		return data;
	};

	return fetcher();
};

export const Chapter = () => {
	const [state, setState] = React.useState<MemeResponse>({
		count: 0,
		memes: [],
	});
	React.useEffect(() => {
		const memes$ = rx.from(getMeme()).subscribe((val) => {
			// console.log('==>', val);
			setState(val);
		});
		return () => {
			memes$.unsubscribe();
		};
		// products$.subscribe((next) => rx.map((val) => val));
	}, []);
	return (
		<div>
			<S.Article>
				<S.Title>Observables.</S.Title>
				<S.P>Ways to create Observables and data composition </S.P>
				<S.P>
					there are ways to avoid the need to subscribe, and of course
					unsubscribe
				</S.P>
				<S.P></S.P>
				<S.P> </S.P>
			</S.Article>

			<S.Divider />
			<S.Article>
				<S.Title>Examples</S.Title>
				<S.Code>
					{`const getMeme = () => {
	interface Meme {
		author: string;
		nsfw: false;
		postLink: string;
		preview: string[];
		spoiler: false;
		subreddit: string;
		title: string;
		ups: number;
		url: string;
	}
	interface MemeResponse {
		count?: number;
		memes: Meme[];
	}
	const memeApiUrl = 'https://meme-api.herokuapp.com/gimme/10';
	const fetcher = async () => {
		const res = await fetch(memeApiUrl, { method: 'GET' });
		const data: MemeResponse = await res.json();
		return data;
	};

	return rx.from(fetcher());
};`}
				</S.Code>
				<S.P>
					And then inside whererver we want to use a stream of fresh memes
				</S.P>
				<S.Code>
					{`				React.useEffect(() => {
		getMeme().subscribe((val) => {
			console.log('==>', val);
			return val;
		});
	}, []);`}
				</S.Code>
				<S.CardContianer>
					{state.memes
						.sort((a, b) => (a.ups > b.ups ? 1 : -1))
						.map((m, index) => (
							<FlipOverCard
								width="8rem"
								height="8rem"
								key={m.url}
								front={
									<div>
										{index + 1}
										<S.P>{m.ups}</S.P>
									</div>
								}
								backgroundUrlBack={m.url}
							/>
						))}
				</S.CardContianer>
				{/*
						

					
	back,
	width,
	height,
	backgroundUrlFront,
	backgroundUrlBack,
	randomBackground,
					 */}
				<S.P>
					which allows you to emit values to the subscriber by calling next() in
					the function.
				</S.P>
				<S.P>
					Thats neat, but rx has some powerful helpers that allow us to create
					observables automatically.
				</S.P>
				<S.Code>
					observable.subscribe(val {'=>'} console.log(val))
					<br />
					&apos;hello&apos;
					<br />
					&apos;world&apos;
				</S.Code>
			</S.Article>
		</div>
	);
};
