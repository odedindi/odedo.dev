import * as React from 'react';
import styled from 'styled-components';
/*
A growing collection of useful helpers and fully functional, ready-made abstractions for react-three-fiber. 
If you make a component that is generic enough to be useful to others, 
think about making it available here through a PR!

npm install @react-three/drei
**this package is using the stand-alone three-stdlib instead of three/examples/jsm.

Basic usage:
import { PerspectiveCamera, PositionalAudio, ... } from '@react-three/drei'
React-native:
import { PerspectiveCamera, PositionalAudio, ... } from '@react-three/drei/native'
The native route of the library does not export Html or Loader. 
The default export of the library is web which does export Html and Loader.


 
 */

export const Chapter = () => {
	return (
		<div style={{ overflow: 'auto', height: '100%' }}>
			<Article>
				<Title></Title>
				<P> </P>
			</Article>

			<Divider />
			<Article>
				<Title>Examples</Title>
				<Code></Code>
				<P></P>
				<P></P>
				<Code></Code>
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
