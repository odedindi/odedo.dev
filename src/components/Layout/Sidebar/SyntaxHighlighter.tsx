import { print } from 'graphql/language/printer';
import { Prism } from '@mantine/prism';

import { useMyQueries } from 'src/hooks';

import { Accordion, Divider, Title } from '@mantine/core';
import { PlusCircledIcon } from '@modulz/radix-icons';

export const SyntaxHighlighter = () => {
	const { language, queries } = useMyQueries();
	return (
		<>
			<Title align="center">Queries</Title>
			<Divider my={15} />
			<Accordion multiple icon={<PlusCircledIcon />}>
				{queries.map(({ code, label }) => (
					<Accordion.Item key={label} label={`${label}`}>
						<Prism language={language}>{print(code)}</Prism>
					</Accordion.Item>
				))}
			</Accordion>
		</>
	);
};

export default SyntaxHighlighter;
