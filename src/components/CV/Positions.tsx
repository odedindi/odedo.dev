import { Anchor, List, Text, Title } from '@mantine/core';
import Spinner from 'src/components/Spinner';
import { useAllMyPosition } from 'src/hooks';
import moment from 'moment';
import Link from 'next/link';

export const Positions = () => {
	const allMyPositions = useAllMyPosition().data?.allMyPositions;

	return (
		<>
			<Title order={2} align="center">
				Experience
			</Title>
			{allMyPositions ? (
				allMyPositions.map((p) => {
					return (
						<div key={p.id}>
							<Title order={3}>{p.title}</Title>
							<Text>
								{p.company} | {p.location}
							</Text>
							<Text>
								{moment(p.startDate).format('MMM yyyy')} -{' '}
								{p.endDate ? moment(p.endDate).format('MMM yyyy') : 'Current'}
							</Text>
							<List withPadding size="sm">
								{p.achievements.map((achievement) => {
									const type = achievement.split(':')[0];
									if (type === 'Code' || type === 'Live demo') {
										const split = achievement.split(' ');
										const link = type === 'Code' ? split[1] : split[2];
										return (
											<List.Item key={achievement}>
												<strong>{type}: </strong>
												<Link passHref href={link}>
													<Anchor rel="noreferrer noopener" target="_blank">
														{link.replace('https://', '')}
													</Anchor>
												</Link>
											</List.Item>
										);
									}
									if (type === 'Technologies involved')
										return (
											<List.Item key={achievement}>
												<strong>{type}: </strong>
												{achievement.split(':')[1]}
											</List.Item>
										);
									return <List.Item key={achievement}>{achievement}</List.Item>;
								})}
							</List>
						</div>
					);
				})
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Positions;
