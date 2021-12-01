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
		<S.Toggle onClick={darkMode.toggle}>
			{/* <S.Switch className="Button" data-time={time} /> */}
			<S.Switcher dark={!darkMode.value} />
		</S.Toggle>
	);
};

export default DarkModeToggler;
