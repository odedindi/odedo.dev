import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

export const Container = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
`;

export const Spinner = styled(LoadingOutlined)`
	font-size: 24;
`;
