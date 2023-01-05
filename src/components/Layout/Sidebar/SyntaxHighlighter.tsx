import { print } from 'graphql/language/printer';
import { Prism } from '@mantine/prism';

import { useMyQueries } from 'src/hooks';

import { Accordion, Divider, Title } from '@mantine/core';
import { PlusCircledIcon } from '@modulz/radix-icons';

export const SyntaxHighlighter = () => {
	const { language, queries } = useMyQueries();
	return (
		<Accordion>
			<Accordion.Item
				label={
					<Title align="center" sx={{ position: 'relative', left: '-1.5rem' }}>
						Queries
					</Title>
				}
			>
				<Accordion multiple icon={<PlusCircledIcon />}>
					{queries.map(({ code, label }) => (
						<Accordion.Item key={label} label={`${label}`}>
							<Prism language={language}>{print(code)}</Prism>
						</Accordion.Item>
					))}
				</Accordion>
			</Accordion.Item>
		</Accordion>
	);
};

export default SyntaxHighlighter;
