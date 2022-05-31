import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@mui/material';

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10000;
	background: #00000029;
`;

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
`;

const ModalContent = styled.div`
	max-width: 700px;
	background: #fff;
	z-index: 13;
	top: 13vh;
	position: fixed;
	box-shadow: 0px 3px 30px #00000029;
	border-radius: 20px;
	color: #000;
	margin: auto;
	left: 0;
	right: 0;
`;

const ModalTitle = styled.h3`
	width: calc(100% - 30px);
	margin-left: auto;
	margin-right: auto;

	font-size: 1.2rem;
	color: rgb(109, 109, 109);
	padding: 14px 0 10px;
`;

const CloseButton = styled(Button)`
	position: absolute;
	right: 15px;
	top: 14px;
	font-size: 1.8rem;
	line-height: 1;
	width: 24px;
	min-width: 0;
	height: 24px;
	padding: 0;
	color: rgb(63, 83, 169);
`;

const ModalBody = styled.div`
	padding: 0 15px 30px 15px;
`;
type Props = {
	title: string;
	children?: React.ReactNode;
	fullWidth?: boolean;
	onClose: () => void;
	visible: boolean;
	noTitle?: boolean;
};
const Modal: React.FC<Props> = props => {
	const { children, title, onClose, visible, fullWidth, noTitle } = props;
	const handleOnKeyDown = (e: any) => {
		console.log(e.keyCode);
		if (e.key === 'Escape') {
			// escape
			onClose();
		}
	};
	if (!visible) return null;
	return (
		<ModalWrapper id='modal-1'>
			<ModalOverlay onClick={onClose} onKeyDown={handleOnKeyDown} />
			<ModalContent
				style={
					fullWidth
						? { maxWidth: '80%', top: '2vh' }
						: { maxWidth: '700px', top: '13vh' }
				}
			>
				{noTitle ? null : (
					<ModalTitle>
						{title}
						<CloseButton onClick={onClose}>×</CloseButton>
					</ModalTitle>
				)}
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</ModalWrapper>
	);
};

Modal.propTypes = {
	children: PropTypes.node
};
Modal.defaultProps = {
	children: null
};

export default Modal;
