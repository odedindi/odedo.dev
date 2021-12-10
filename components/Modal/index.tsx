import * as React from 'react';
import { Modal as AntModal } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

type ModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	title: string;
};

const Modal: React.FC<ModalProps> = ({
	children,
	closeModal,
	isOpen,
	title,
}) => (
	<StyledModal
		centered
		title={title}
		closeIcon={<CloseIcon icon={faTimes} />}
		visible={isOpen}
		onCancel={closeModal}
		footer={null}>
		{children}
	</StyledModal>
);

export default Modal;

const CloseIcon = styled(FontAwesomeIcon)`
	font-size: 2rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.naviAndContactButtons.primary};
	position: relative;
	top: 0.5rem;
	&:hover {
		transition: 0.5s ease-in-out;
		color: ${({ theme }) => theme.colors.naviAndContactButtons.secondary};
	}
`;

const StyledModal = styled(AntModal)`
	.ant-modal-header,
	.ant-modal-title,
	.ant-modal-content {
		background-color: ${({ theme }) => theme.colors.background.primary};
		color: ${({ theme }) => theme.colors.naviAndContactButtons.primary};
	}
`;
