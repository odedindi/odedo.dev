import * as React from 'react';
import * as S from './styles';
import { Header, SubHeader, TertiaryHeader } from '../styles';

const Anchor: React.FC<any> = ({ children, level, id, ...props }) => {
	let override = undefined;

	switch (level) {
		case 3:
			override = SubHeader;
			break;
		case 4:
			override = TertiaryHeader;
			break;
		default:
			override = Header;
			break;
	}

	return (
		<S.AnchorHeader {...props} as={override}>
			<S.InvisibleAnchor id={id} />

			{children}

			<S.Anchor href={`#${id}`} aria-label={id}>
				<S.AnchorIcon />
			</S.Anchor>
		</S.AnchorHeader>
	);
};

export default Anchor;
