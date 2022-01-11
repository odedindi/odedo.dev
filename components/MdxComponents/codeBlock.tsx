import React from 'react';
import { Editor } from 'react-live';
import styled from 'styled-components';
import { darkGrey } from './colors';
import { monospace } from './fonts';
import { Note } from './Note/styles';

const CodeBlock = styled((props) => {
	const language = (props.language || 'clike').toLowerCase().trim();

	return <Editor {...props} disabled language={language} />;
})`
	background: ${darkGrey};
	border-radius: 3rem;
	box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
	font-family: ${monospace};
	font-size: 0.8rem;
	font-weight: 300;
	margin: 35rem 0;
	overflow-x: hidden;
	white-space: pre-wrap;
	${Note} & {
		margin: 20rem 0;
	}
`;

export default CodeBlock;
