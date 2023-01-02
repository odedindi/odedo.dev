import { Avatar, Center, Container, Group, Title } from '@mantine/core';
import { useGithubAvatar, useMe } from 'src/hooks';

export const Header = () => {
	const me = useMe().data?.me;
	const avatar = useGithubAvatar('odedindi').data?.avatar;

	return (
		<Container mt={25}>
			<Center>
				<Group direction="column">
					<Title
						sx={() => ({ textTransform: 'uppercase', margin: 'auto' })}
						order={1}
					>
						{me?.name ?? 'Oded Winberger CV'}
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

// <M.Title sx={() => ({ textTransform: 'uppercase' })}>
// Oded Winberger
// </M.Title>
// <M.Title>Full Stack Developer</M.Title>
