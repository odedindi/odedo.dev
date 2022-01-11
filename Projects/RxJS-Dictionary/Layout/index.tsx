import * as React from 'react';
import styled from 'styled-components';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Container>{children}</Container>
		</>
	);
};

export default Layout;

const Container = styled.div`
	min-width: 25rem;
	min-height: 45rem;
	width: 90vw;
	border: 0.125rem solid darkgray;
	padding: 0.25rem;

	display: flex;
`;
