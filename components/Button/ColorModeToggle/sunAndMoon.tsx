// =============== React & Next ===============
import * as React from 'react';
// ================== hooks ===================
import useDarkMode from 'use-dark-mode';
// ================== styles ==================
import * as S from '../style';
// ============================================

type ToggleProps = {
	checked: boolean;
	onChange: () => void;
};
const Toggle = ({ checked, onChange }: ToggleProps) => (
	<S.ColorModeToggleBoxWrapper>
		<S.ColorModeToggleBox checked={checked} onChange={onChange} />
		<S.ColorModeToggleBoxLabel
			id="colorModeToggleBoxLabel"
			isDarkMode={checked}
		/>
	</S.ColorModeToggleBoxWrapper>
);

const ColorModeToggle = () => {
	const darkMode = useDarkMode(false);
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => setIsMounted(true), []);

	if (!isMounted) return null;
	return (
		<S.ColorModeToggler darkMode={darkMode.value}>
			<S.ColorModeButton onClick={darkMode.disable}>☀</S.ColorModeButton>
			<Toggle checked={darkMode.value} onChange={darkMode.toggle} />
			<S.ColorModeButton onClick={darkMode.enable}>☾</S.ColorModeButton>
		</S.ColorModeToggler>
	);
};
export default ColorModeToggle;
