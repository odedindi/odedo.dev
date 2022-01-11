// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './styles';
// ================ components ================
import DevTool from './DevTool';
// ============================================

export const DevTools = ({ devTools, title }: DevToolsProps) => {
	return (
		<S.DevToolsContainer>
			<S.DevToolsTitle>
				<h5>{title}:</h5>
			</S.DevToolsTitle>
			<DevTool devTools={devTools} />
		</S.DevToolsContainer>
	);
};

export default DevTools;
