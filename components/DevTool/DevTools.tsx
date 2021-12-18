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
			<section className="title">
				<h5>{title}:</h5>
			</section>

			<S.DevToolsIconsWrapper>
				<DevTool devTools={devTools} />
			</S.DevToolsIconsWrapper>
		</S.DevToolsContainer>
	);
};

export default DevTools;
