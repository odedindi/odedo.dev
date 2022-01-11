import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import styled, { css } from 'styled-components';

import { darkGrey, red } from '../colors';
import { headerFont, monospace } from '../fonts';
import { device } from 'utils/mediaQueries';

export const Provider = styled(LiveProvider)`
	box-shadow: 1rem 1rem 20rem rgba(20, 20, 20, 0.27);
	overflow: hidden;
	margin: 35rem 0;
	text-align: left;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	align-items: stretch;
	${device.phone} {
		flex-direction: column;
	}
`;

export const columnMixin = css`
	flex-basis: 50%;
	width: 50%;
	max-width: 50%;
	${device.phone} {
		flex-basis: auto;
		width: 100%;
		max-width: 100%;
		height: auto;
	}
`;

export const Code = styled.code`
	${columnMixin};
`;

export const editorMixin = `
  background: ${darkGrey};
  font-size: 0.8rem;
  font-family: ${monospace};
  font-weight: 300;
  min-height: 20rem;
  overflow-y: auto !important;
  overflow-x: hidden;
  cursor: text;
  white-space: pre-wrap;
  position: relative;
`;

export const Editor = styled(LiveEditor)`
	${editorMixin};
`;

export const Preview = styled(LivePreview)`
	position: relative;
	padding: 0.5rem;
	background: white;
	color: black;
	height: auto;
	overflow: hidden;
	white-space: normal;
	${columnMixin};
`;

export const Error = styled(LiveError)`
	display: block;
	width: 100%;
	padding: 8rem;
	background: ${red};
	color: white;
	font-size: 0.8rem;
	font-family: ${headerFont};
	white-space: pre;
`;
