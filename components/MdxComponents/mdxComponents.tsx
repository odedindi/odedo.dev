import * as React from 'react';
import { elementToText, titleToDash } from './helpers';
import LiveEditor from './LiveEditor/Editor';
import CodeBlock from './codeBlock';
import Note from './Note';
import Link from './Link';
import { Code, Title, Label, LabelGroup } from './styles';
import Anchor from './Anchor';

const Heading: React.FC<{ level: number }> = ({ level, children }) => {
	if (level === 1) return <Title>{children}</Title>;

	// The pipe indicates labels after the initial title
	const [_, ...labels] = elementToText(children).split('|');

	const title = React.Children.map(children, (child) => {
		if (typeof child === 'string') {
			const pipeIndex = child.indexOf('|');
			return pipeIndex > -1 ? child.slice(0, pipeIndex) : child;
		}

		return child;
	});

	const hash = titleToDash(title);

	return (
		<Anchor id={hash} level={level}>
			{title}
			{labels.length > 0 && (
				<LabelGroup>
					{labels.map((label, index) => (
						<Label key={index} isVersion={label.trim().startsWith('v')}>
							{label.trim()}
						</Label>
					))}
				</LabelGroup>
			)}
		</Anchor>
	);
};

Heading.displayName = 'Heading';

const components = {
	p: ({ children }: any) => <p>{children}</p>,

	inlineCode: ({ children }: any) => <Code>{children}</Code>,

	code({ children, className = '' }: any) {
		const language = className.replace(/language-/, '');
		if (language === 'react')
			return <LiveEditor code={children.trim()} noInline />;
		else if (language === 'react-inline')
			return <LiveEditor code={children.trim()} />;
		else if (language === 'sh')
			return <CodeBlock code={children.trim()} language="bash" />;

		return <CodeBlock code={children.trim()} language={language} />;
	},

	blockquote: ({ children }: any) => <Note>{children}</Note>,
	a: ({ href, children }: any) => (
		<Link href={href} inline>
			{children}
		</Link>
	),
	h1: ((props) => <Heading {...props} level={1} />) as React.FC,
	h2: ((props) => <Heading {...props} level={2} />) as React.FC,
	h3: ((props) => <Heading {...props} level={3} />) as React.FC,
	h4: ((props) => <Heading {...props} level={4} />) as React.FC,
	h5: ((props) => <Heading {...props} level={5} />) as React.FC,
};

export default components;
