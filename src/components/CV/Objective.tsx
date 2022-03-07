import { Container, Skeleton, Text, Title } from '@mantine/core';
import { useMyObjective } from 'src/hooks';

export const Objective = () => {
	const myObjective = useMyObjective().data?.myObjective;

	return (
		<Container mb={15}>
			<Title order={2} align="center">
				Objective
			</Title>

			{myObjective ? (
				<Text align="center">{myObjective.objective}</Text>
			) : (
				<Skeleton height={8} radius="xl" />
			)}
		</Container>
	);
};

export default Objective;
