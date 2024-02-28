import { Box, Center, Container, Group, Image, Title } from '@mantine/core';
import { FC, useState } from 'react';
import { useMe } from 'src/hooks';
import SelectLanguage from '../LanguageToggler';

export type HeaderProps = {
	title?: string;
	subtitle?: string;
	withAvatar?: boolean;
};
export const Header: FC<HeaderProps> = ({ title, subtitle, withAvatar }) => {
	const me = useMe().data?.me;

	return (
		<Container mt={25}>
			{withAvatar ? <Me /> : null}
			<Center mt={'1rem'}>
				<Group direction="column">
					<Title sx={() => ({ textAlign: 'center' })} order={1}>
						{title}
					</Title>
					<Title sx={{ margin: 'auto' }} order={3}>
						{subtitle}
					</Title>
				</Group>
			</Center>
		</Container>
	);
};

const Me: FC = () => {
	const [hovered, setHovered] = useState(false);
	const sizeAdjusment = hovered ? '116' : '108';
	const leftAdjusment = hovered ? '-10' : '-8';
	return (
		<Box
			sx={{
				height: '100px',
				width: '100px',
				overflow: 'hidden',
				borderRadius: '50%',
				margin: 'auto',
			}}
		>
			<Image
				src="/assets/Oded.jpg"
				alt="me"
				sx={{
					objectFit: 'cover',
					aspectRatio: 'auto',
					position: 'relative',
					left: `${leftAdjusment}px`,
					width: `${sizeAdjusment}px`,
					transition: 'all 0.2s ease',
				}}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			/>
		</Box>
	);
};
