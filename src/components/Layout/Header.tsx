import { Avatar, Center, Container, Group, Title } from '@mantine/core';
import { useGithubAvatar, useMe } from 'src/hooks';

export const Header = () => {
	const me = useMe().data?.me;
	const avatar = useGithubAvatar('odedindi').data?.avatar;

	return (
		<Container mt={25}>
			<Center mt={'3.5rem'}>
				<Group direction="column">
					<Title
						sx={() => ({
							textTransform: 'uppercase',
							textAlign: 'center',
						})}
						order={1}
					>
						{me?.name}
					</Title>

					<Title sx={() => ({ margin: 'auto' })} order={2}>
						{me?.tagline ?? 'loading...'}
					</Title>

					<Avatar
						sx={() => ({ margin: 'auto' })}
						src={avatar}
						alt="it's me"
						radius={100}
						size={150}
					/>
				</Group>
			</Center>
		</Container>
	);
};
