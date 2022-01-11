import * as React from 'react';
import glossaryAndSemanticsJSON from './glossaryAndSemantics.json';
import TableOfContent from './TableOfContent';
import {
	Container,
	Title,
	Main,
} from 'Projects/RxJS-Dictionary/styles/pageLayout';

const Intro = () => {
	const loading = <>Loading...</>;
	const [glossary] = React.useState<any>(() => glossaryAndSemanticsJSON);

	return (
		<Container>
			<Title>
				<h4>{glossary?.title ?? loading}</h4>
				<h5>{glossary?.subTitle ?? loading}</h5>
			</Title>
			<Main>
				<p>{glossary?.intro ?? loading}</p>
				<TableOfContent />
			</Main>
		</Container>
	);
};

export { Intro };
