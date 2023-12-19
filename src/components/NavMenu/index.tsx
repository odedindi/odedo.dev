import { FC } from 'react';
import { Affix, useMantineTheme } from '@mantine/core';
import NavLink from './NavLink';
import DarkModeToggler from '../DarkModeToggler';
import styled from 'styled-components';

const Base = styled(Affix)`
	min-height: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: clamp(75px, 20vw, 100%);
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	padding-top: 1.1rem;
`;

const links = {
	// home: { id: 'home', href: '/', label: 'Go Back Home' },
	// cv: { id: 'cv', href: '/cv', label: 'Checkout Me CV' },
	cvPdf: {
		id: 'cvPdf',
		href: '/api/cv',
		label: 'You can download my CV here',
	},
};

export const NavMenu: FC<{
	hideLinks?: { [Key in keyof typeof links]?: boolean };
}> = ({ hideLinks }) => {
	const { dir } = useMantineTheme();

	return (
		<Base
			position={{
				top: `${20}px`,
				left: dir === 'ltr' ? `${40}px` : undefined,
				right: dir === 'rtl' ? `${40}px` : undefined,
			}}
		>
			<DarkModeToggler />
			<Inner>
				<NavLink {...links.cvPdf} hide={hideLinks?.cvPdf} />
			</Inner>
		</Base>
	);
};
export default NavMenu;
