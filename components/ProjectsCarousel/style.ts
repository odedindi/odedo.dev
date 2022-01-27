import styled from 'styled-components';

export const AnotherTry = styled.div`
	height: 100vh;
	margin-top: 50px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	.carousel-box {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		// width: 250vw;
		height: 400px;
		overflow: hidden;
	}
`;

export const Card = styled.div`
	/* position: absolute;
	left: 0; */
	// top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
	.card {
		width: 100%;
		height: 100%;

		background-color: black;
		text-align: center;
		transform-origin: center bottom;
	}
	.card-text {
		color: black;
		font-size: 20px;
		line-height: 28px;
		margin: 0;
		font-weight: bold;
		margin-bottom: 40px;
		opacity: 0.5;

		&.active {
			opacity: 1;
		}
	}
`;

export const PrevButton = styled.svg``;
export const NextButton = styled.svg``;
