import { FC, HTMLAttributeAnchorTarget } from 'react';

import NavLink from './NavLink';
import DarkModeToggler from '../DarkModeToggler';

export const NavLinks: FC<{
	links: {
		href: string;
		label: string;
		target?: HTMLAttributeAnchorTarget;
	}[];
}> = ({ links }) => (
	<>
		{links.map((link, i) => (
			<NavLink key={i} {...link} top={(i + 1) * 20} left={25} right={25} />
		))}
		<DarkModeToggler
			style={{
				position: 'fixed',
				top: `${links.length * 35}px`,
				left: '25px',
			}}
		/>
	</>
);
export default NavLinks;
