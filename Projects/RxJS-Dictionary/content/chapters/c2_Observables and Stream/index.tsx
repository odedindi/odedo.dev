import * as React from 'react';
import * as Rxjs from 'rxjs';
import styled from 'styled-components';
/*
 
 There are many ways to create Observables. Remember, a stream can be anything. 
 The most fundamental method is create(), 
 which allows you to emit values to the subscriber by calling next() in the function.

const observable = new Rxjs.Observable( observer => {
    observer.next( 'hello' )
    observer.next( 'world' )
})

observable.subscribe(val => console.log(val))
// hello
// world
That’s neat, but RxJS has some powerful helpers that allow us to create observables automatically.

Observable from DOM Events
 
 
 
 */

export const Chapter = () => {
	const ob = React.useMemo(
		() =>
			new Rxjs.Observable((ob) => {
				ob.next('wello');
				ob.next('horld');
				ob.next(() => Math.random());
			})
				.subscribe((val) => console.log(val))
				.unsubscribe(),
		[],
	);
	// React.useEffect(() => {
	// 	ob.subscribe((val) => console.log(val))
	// }, [ob]);

	return (
		<div style={{ overflow: 'auto', height: '100%' }}>
			<Article>
				<Title>There are many ways to create Observables.</Title>
				<P>There are many ways to create Observables. </P>
				<P>Remember, a stream can be anything.</P>
				<P>An older (somewhat fundamental) method is create(),</P>
				<P>
					but it there is a cleaner way plus, create() is depricated our way is
					with new Observable() method.
				</P>
			</Article>

			<Divider />
			<Article>
				<Title>Examples</Title>
				<Code>
					{`const observable = new Rxjs.Observable((observer) => {''`}
					<br />
					{`observer.next( 'hello' )`}
					<br />
					{`observer.next( 'world' )`}
					<br /> {'})'}
				</Code>
				<P>
					which allows you to emit values to the subscriber by calling next() in
					the function.
				</P>
				<P>
					Thats neat, but RxJS has some powerful helpers that allow us to create
					observables automatically.
				</P>
				<Code>
					{`observable.subscribe(val => console.log(val))`}
					<br />
					{`//  'hello' `}
					<br />
					{`//  'world' `}
				</Code>
			</Article>
		</div>
	);
};

const Title = styled.h2`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.primary};
	margin: 0;
	padding: 0 0.5rem;
`;

const P = styled.p`
	font-size: 0.7rem;
	letter-spacing: 0.2rem;
	margin: 0;
	padding: 0.125rem;
`;

const Code = styled.p`
	font-weight: lighter;
	color: orange;
	margin: 0;
	padding: 0;
`;
const Article = styled.article`
	padding: 0.25rem 2rem;
`;

const Divider = styled.span`
	width: max-content;
	height: 1rem;
	padding: 0 1rem;
	background: gray;
`;
