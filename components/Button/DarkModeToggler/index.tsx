// based on https://daily-dev-tips.com/posts/creating-day-night-css-only-toggle-switch/
// =============== React & Next ===============
import * as React from 'react';
// ================== hooks ===================
import useDarkMode from 'use-dark-mode';
// ================== styles ==================
import * as S from './style';

const DarkModeToggler = () => {
	const darkMode = useDarkMode(false);

	return (
		<>
			<S.Checkbox checked={darkMode.value} onChange={darkMode.toggle} />
			<S.Switch checked={darkMode.value} onClick={darkMode.toggle}>
				<S.Background checked={darkMode.value} />
			</S.Switch>
		</>
	);
};

export default DarkModeToggler;
