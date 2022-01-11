import * as React from 'react';
import * as S from './styles';
import styled, { css } from 'styled-components';
import { LiveProvider, LivePreview } from 'react-live';
import { Error } from 'components/MdxComponents/LiveEditor/styles';
import Link from 'components/MdxComponents/Link';

type EditorProps = {
	title?: string;
	subTitle?: string;
	code?: string;
};

const Editor: React.FC<EditorProps> = ({ title, subTitle, code }) => (
	<LiveProvider
		code={code}
		noInline
		scope={{ React, styled, css, Link }}
		style={{ border: 'solid 1px red' }}>
		<S.Title>
			<S.Tagline>{title}</S.Tagline>
			<S.SupportingTagline>{subTitle}</S.SupportingTagline>
		</S.Title>

		<S.Links>
			<LivePreview />
		</S.Links>

		<S.EditorContainer>
			<Editor />
			<Error />
		</S.EditorContainer>
	</LiveProvider>
);

export default Editor;
