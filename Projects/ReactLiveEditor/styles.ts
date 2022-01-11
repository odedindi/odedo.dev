import { LiveEditor as ReactLiveEditor } from 'react-live';
import styled from 'styled-components';

import darken from 'polished/lib/color/darken';

const darkGrey = darken(0.05, '#282a36');

export const Tagline = styled.h1`
	font-weight: 600;
	font-size: 1.3rem;
`;

export const SupportingTagline = styled.h2`
	font-size: 1.1rem;
	font-weight: 400;
`;

export const Title = styled.div`
	margin: 2rem 0;
	h1,
	h2 {
		margin: 0;
	}
`;

export const EditorContainer = styled.div`
	background: red;
	display: inline-block;
	box-shadow: 1rem 1rem 20rem rgba(20, 20, 20, 0.27);
	margin: 3.5rem 0;
	text-align: left;
	width: 100%;
	max-width: 34rem;
`;

export const editorMixin = `
  background: ${darkGrey};
  font-size: 0.8rem;
  font-family: dm, monospace;
  font-weight: 300;
  min-height: 20rem;
  overflow-y: auto !important;
  overflow-x: hidden;
  cursor: text;
  white-space: pre-wrap;
  position: relative;
`;

export const Editor = styled(ReactLiveEditor)`
	${editorMixin};
	height: 100%;
	white-space: pre;
	width: 100%;
`;

export const Links = styled.div`
	margin: 36rem 0;
`;
