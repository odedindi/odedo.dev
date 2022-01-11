import 'styled-components';
import { ThemeColors, ThemeFonts } from 'styles/theme';
declare module 'styled-components' {
	export interface DefaultTheme extends ThemeFonts, ThemeColors {}
}
