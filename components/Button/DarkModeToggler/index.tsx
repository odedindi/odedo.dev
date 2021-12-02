// =============== React & Next ===============
import * as React from 'react';
// ================== hooks ===================
import useDarkMode from 'use-dark-mode';
// ================== styles ==================
import * as S from './style';

const DarkModeToggler = () => {
	const darkMode = useDarkMode(false);
	// const [time, setTime] = React.useState<'day' | 'night'>(() =>
	// 	!darkMode.value ? 'day' : 'night',
	// );
	// React.useEffect(() => {
	// 	darkMode.value ? setTime('night') : setTime('day');
	// 	console.log(darkMode.value);
	// }, [darkMode.value]);

	return (
		<S.Switch onClick={darkMode.toggle}>
			<input type="checkbox" className="checkbox" checked={darkMode.value} />
			<label htmlFor="toggle" className="celestialBodies">
				<span className="celestialBodiesBackground"></span>
			</label>
		</S.Switch>
	);
};

export default DarkModeToggler;
