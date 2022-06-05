import * as React from 'react';

import * as S from './style';

import GoToTop from './GoToTop';
import CVLink from './CVLink';

import UserSettings from './UserMenu';

const Navigation = () => {
	const nav = React.useRef<HTMLElement>(undefined!);

	return (
		<S.Nav ref={nav}>
			<CVLink />
			<GoToTop />
			<UserSettings />
		</S.Nav>
	);
};

export default Navigation;
