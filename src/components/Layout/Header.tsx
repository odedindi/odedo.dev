import { Box, Center, Container, Group, Image, Title } from '@mantine/core';
import { FC, useState } from 'react';
import { useMe } from 'src/hooks';

export const Header = () => {
	const me = useMe().data?.me;

	return (
		<Container mt={25}>
			<Center mt={'3.5rem'}>
				<Group direction="column">
					<Title sx={() => ({ textAlign: 'center' })} order={1}>
						{me?.tagline ?? 'loading...'}
					</Title>
					<Box
						sx={{
							height: '200px',
							width: '200px',
							overflow: 'hidden',
							borderRadius: '50%',
							margin: 'auto',
						}}
					>
						<Me />
					</Box>
					<Title sx={{ margin: 'auto' }} order={3}>
						{me?.name}
					</Title>
				</Group>
			</Center>
		</Container>
	);
};

const Me: FC = () => {
	const [hovered, setHovered] = useState(false);
	const sizeAdjusment = hovered ? '215' : '208';
	const leftAdjusment = hovered ? '-10' : '-8';
	return (
		<Image
			src="/assets/Oded.jpg"
			alt="me"
			sx={{
				objectFit: 'cover',
				aspectRatio: 'auto',
				position: 'relative',
				left: `${leftAdjusment}px`,
				width: `${sizeAdjusment}px`,
				transition: 'all 0.2s ease-in',
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		/>
	);
};
