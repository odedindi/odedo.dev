import * as React from 'react';
import * as S from './styles';

const NoteWrapper: React.FC<{ label?: string }> = ({
	label = 'Note',
	children,
}) => (
	<S.Note>
		<S.NoteLabel>{label}</S.NoteLabel>
		{children}
	</S.Note>
);

export default NoteWrapper;
