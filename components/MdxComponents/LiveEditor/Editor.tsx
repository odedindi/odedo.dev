import * as React from 'react';
import * as S from './styles';
import styled, {
	createGlobalStyle,
	css,
	keyframes,
	StyleSheetManager,
	ThemeProvider,
	withTheme,
} from 'styled-components';

import stylisRTLPlugin from 'stylis-plugin-rtl';

const LiveEditor: React.FC<{ noInline?: boolean; code: any; scope?: any }> = ({
	noInline,
	code,
	scope = {},
}) => {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => setMounted(true), []);

	return (
		<S.Provider
			code={code}
			noInline={noInline}
			// mountStylesheet={false}
			scope={{
				...scope,
				createGlobalStyle,
				css,
				keyframes,
				styled,
				ThemeProvider,
				StyleSheetManager,
				withTheme,
				stylisRTLPlugin,
			}}>
			<S.Row>
				<S.Code>
					<S.Editor />
				</S.Code>

				{/* because react-live uses a different babel compiler, the classnames it generates aren't stable and a remount is needed after SSR */}
				<S.Preview
					className="notranslate"
					key={mounted ? 'preview-client' : 'preview-ssr'}
				/>
			</S.Row>

			<S.Error />
		</S.Provider>
	);
};

export default LiveEditor;
