import styled from 'styled-components';

export const LayoutWrapper = styled.section`
	width: 100vw;
	background-color: white;
	font-family: 'Noto Sans', sans-serif;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.background.primary};
	line-height: 1.3;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

export const ChildrenWrapper = styled.section`
	width: 100vw;
	background-color: white;
	font-family: 'Noto Sans', sans-serif;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.text.primary};
	line-height: 1.3;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
	background: ${({ theme }) => theme.colors.background.secondary};
	visibility: hidden;
	overflow: hidden;
`;
