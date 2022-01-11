import * as React from 'react';
import styled, { css } from 'styled-components';

const Sidebar: React.FC<SideBarProps> = ({
	isOpen,
	close,
	handleChoice,
	content,
}) => {
	return (
		<>
			<SideBarStyle open={isOpen}>
				{content.map((item, index) => (
					<div onClick={() => handleChoice(item)} key={index}>
						{item.id}
					</div>
				))}
			</SideBarStyle>
		</>
	);
};

export default Sidebar;

const SideBarStyle = styled.aside<{ open: boolean }>`
	border: 0.125rem solid red;
	justify-self: flex-start;
	max-width: 2rem;

	height: 100%;

	transition: 1.5s ease-in-out;

	${({ open }) =>
		open
			? css`
					min-width: 10rem;
			  `
			: null}
`;
