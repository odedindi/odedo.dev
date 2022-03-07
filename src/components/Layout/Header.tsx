import { Avatar, Center, Container, Group, Title } from '@mantine/core';
import { useGithubAvatar, useMe } from 'src/hooks';

export const Header = () => {
	const me = useMe().data?.me;
	const avatar = useGithubAvatar('odedindi').data?.avatar;

	return (
		<Container mt={25}>
			<Center>
				<Group direction="column">
					<>
						<Title order={1}>{me?.name ?? 'Oded Winberger CV'}</Title>
						<Title order={2}>{me?.tagline ?? 'loading...'}</Title>
						<Center style={{ width: '100%' }}>
							<Avatar src={avatar} alt="it's me" radius={100} size={150} />
						</Center>
					</>
				</Group>
			</Center>
		</Container>
	);
};
