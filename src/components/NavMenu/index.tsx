import { FC, useMemo } from 'react';
import { Affix, useMantineTheme } from '@mantine/core';
import NavLink from './NavLink';
import DarkModeToggler from '../DarkModeToggler';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Base = styled(Affix)`
	min-height: 8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

const links = [
	{ href: '/', label: 'Go Back Home' },
	{ href: '/about', label: 'About Me' },
	{ href: '/cv', label: 'Checkout Me CV' },
	{ href: '/assets/cv_oded_winberger.pdf', label: 'You can download my CV here' },
];
type PagePathname = '/' | '/about' | '/cv';

const navLinksIndexes: { [Pathname in PagePathname]: number[] } = {
	'/': [3], //[1, 2],
	'/about': [0, 2],
	'/cv': [0, 1, 3],
};

export const NavMenu: FC = () => {
	const pathname = useRouter().pathname as PagePathname;
	const { dir } = useMantineTheme();

	return (
		<Base
			position={{
				top: `${20}px`,
				left: dir === 'ltr' ? `${25}px` : undefined,
				right: dir === 'rtl' ? `${25}px` : undefined,
			}}
		>
			<Inner>
				{links.map((link, i) => (
					<NavLink
						key={i}
						dontShow={!navLinksIndexes[pathname].includes(i)}
						{...link}
					/>
				))}
			</Inner>
			<DarkModeToggler />
		</Base>
	);
};
export default NavMenu;
