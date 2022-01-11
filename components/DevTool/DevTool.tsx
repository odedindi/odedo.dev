// =============== React & Next ===============
import * as React from 'react';
import Image from 'next/image';
// ================== styles ==================
import * as S from './styles';
// =================== hooks ==================
// ================ components ================
import DevToolLink from './DevLink';
import CreateAnimation from 'components/CreateAnimation';
// ================= devtools =================
import myDevTools from 'utils/devToolsLogos';
// ============================================

export const DevTool = ({ devTools }: Partial<DevToolsProps>) => {
	return (
		<S.DevToolsIconWrapper>
			{devTools?.map((devTool) => (
				<CreateAnimation type="Hover" key={devTool.id}>
					{myDevTools.logosToBeUsedAsImageSource.includes(devTool.id) ? (
						<DevToolLink
							href={devTool.link}
							content={
								<Image
									src={devTool.logo}
									alt={`${devTool.id} logo`}
									width="60px"
									height="90px"
									layout={'fixed'}
								/>
							}
						/>
					) : (
						<DevToolLink
							key={devTool.id}
							href={devTool.link}
							content={devTool.logo}
						/>
					)}
				</CreateAnimation>
			))}
		</S.DevToolsIconWrapper>
	);
};

export default DevTool;
