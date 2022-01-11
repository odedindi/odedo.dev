import * as React from 'react';
import dynamic from 'next/dynamic';
import jsonDATA from './tableOfContent.json';
import styled, { css } from 'styled-components';
import * as Hooks from 'hooks';
import gsap, { Power4 } from 'gsap';
import { C1, C2 } from '../chapters';

import { Editor as ToastEditor, EditorProps } from '@toast-ui/react-editor';
import { Editor as ProperEditor } from 'Projects/EditorViewer';

interface ISection {
	[x: ISection['key']]: string | ISectionContent[];
	key: string;
}

interface ISectionContent {
	title: string;
	content: any;
}

const TableOfContent = () => {
	const [didMount, setDidMount] = React.useState(false);

	const [tableOfContent] = React.useState(() =>
		Object.keys(jsonDATA).map((s) => ({
			key: s,
			[s]: Object.entries(jsonDATA[s as keyof typeof jsonDATA])
				.map((value) => ({
					title: value[0],
					content: value[1],
				}))
				.filter((value) => value.content),
		})),
	);

	const { animationRef, toggle } = Hooks.useScrollEffect({});
	const { fade, flipX, flipY, slide, slideUp, zoom } = Hooks.useSlideEffect();

	const editorRef = React.createRef<ToastEditor>();

	const handleClick = () => {
		// editorRef?.current.getInstance().exec('Bold');
		editorRef?.current?.getRootElement().classList.add('my-editor-root');
	};

	React.useEffect(() => {
		setDidMount(true);
	}, []);
	return !didMount ? (
		<>loading...</>
	) : (
		<Table>
			<TableTitle onClick={toggle}>Table of Content</TableTitle>
			<ContentWrapper ref={animationRef}>
				{tableOfContent.map((section: ISection) => (
					<Section key={section.key} section={section} />
				))}
				{console.log(tableOfContent)}
				<Screen>
					<div className="tv">
						<div style={{ overflow: 'auto', padding: '2rem 0' }}>
							<C1 />
						</div>
					</div>
				</Screen>
			</ContentWrapper>

			<ProperEditor onChange={(value) => console.log(value)} />

			<button onClick={handleClick}>Click!</button>
		</Table>
	);
};
export default TableOfContent;

const Section: React.FC<{ section: ISection }> = ({ section }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<ContentSection isOpen={isOpen}>
			<p className="sectionTitle" onClick={toggle}>
				<strong>{section.key}</strong>:
			</p>
			{isOpen &&
				(section[section.key] as ISectionContent[]).map(({ title, content }) =>
					title === 'intro' ? (
						<div className="intro" key={title}>
							{content}
						</div>
					) : (
						<li className="sectionValue" key={title}>
							{title}
						</li>
					),
				)}
		</ContentSection>
	);
};

const colorText = '#e1eef6';

const Screen = styled.div`
	background-color: ${colorText};

	width: 100%;
	min-height: 30rem;
	content: ' ';
	overflow: auto;

	// Fallback for old browsers
	background: #16222a;

	background: -webkit-linear-gradient(to left, #16222a, #3a6073);
	background: linear-gradient(to left, #16222a, #3a6073);

	background-size: cover;
	color: ${colorText};
`;

const Content = styled.div``;

const Table = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;

	border-top: solid 0.125rem darkgray;

	// ============================================= //

	// ============================================= //
	.tv {
		width: 100%;

		min-height: 400px;

		margin: 15px 0 0 0;

		position: relative;

		-webkit-box-sizing: border-box;

		-moz-box-sizing: border-box;

		box-sizing: border-box;

		background: #231f20;

		-webkit-box-shadow: 13px 13px rgba(0, 0, 0, 0.16);

		box-shadow: 13px 13px rgba(0, 0, 0, 0.16);
	}
	.screen-inner {
		width: 590px;

		height: 330px;

		position: absolute;

		top: 15px;

		left: 15px;

		-webkit-box-sizing: border-box;

		-moz-box-sizing: border-box;

		box-sizing: border-box;

		background-color: black;

		overflow: hidden;
	}
	.screen-content {
		width: 100%;

		height: 100%;

		position: relative;

		-webkit-background-size: cover;

		background-size: cover;

		background-position: center center;
	}
	.screen-content:after {
		width: 100%;

		height: 100%;

		content: '';

		position: absolute;

		background: white;

		opacity: 0;

		left: 0;

		top: 0;
	}
	.tv-panel {
		height: 40px;

		width: 100%;

		background: #343434;

		position: absolute;

		bottom: 0;

		left: 0;
	}
	.tv-panel__indicators {
		position: absolute;

		left: 6px;

		bottom: 5px;

		font-size: 0;
	}
	.tv-panel__indicators SPAN {
		background: #fa4c4c;
		width: 3px;
		height: 3px;
		margin: 0 4px 0 0;
		border-radius: 100%;
		display: inline-block;
		-webkit-transition: background150ms ease;
		transition: background150ms ease;
	}
	.tv-panel__buttons {
		position: absolute;
		left: 50%;
		margin: 0 0 0 -32px;
		bottom: 16px;
		font-size: 0;
	}
	.tv-panel__buttons SPAN {
		background: #222222;
		width: 14px;

		height: 7px;

		margin: 0 3px 0 0;

		display: inline-block;

		-webkit-transition: background150ms ease;

		transition: background150ms ease;
	}
`;

const TableTitle = styled.h5`
	cursor: pointer;
`;

const ContentWrapper = styled.div<{ isOpen?: boolean }>`
	width: 100%;
	transition: all 0.5s ease-in-out;
`;
const ContentSection = styled.section<{ isOpen: boolean }>`
	border-bottom: solid 0.125rem darkgray;
	width: 100%;
	padding: 0.75rem 0 0.5rem 0;

	.sectionTitle {
		position: relative;
		top: 0.5rem;
		transition: 0.07s ease-in-out;
		cursor: pointer;
		:hover {
			transform: scaleY(1.05);
		}
	}

	.sectionValue {
		cursor: pointer;
		transition: 0.05s ease-in-out;
		:hover {
			font-weight: bolder;
		}
	}
`;
