// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// ================== icons ===================
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// ============================================

type ModalProps = {
	isOpen: boolean;
	toggle: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, toggle }) => (
	<S.Modal isOpen={isOpen}>
		<S.CloseIcon onClick={toggle} icon={faTimes} />
		{children}
	</S.Modal>
);

export default Modal;
