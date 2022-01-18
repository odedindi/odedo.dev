import styled from 'styled-components';

export const SliderWrapper = styled.div`
	width: 660px;
	height: 250px;
	background-color: #333;
	position: relative;
	left: 3%;

	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.image {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.image p {
		position: absolute;
		bottom: 2rem;
		left: 1rem;
		color: white;
		z-index: 100;
		font-weight: 700;
		text-transform: uppercase;
	}

	.stripes {
		position: absolute;
		bottom: 2rem;
		right: 1rem;
		width: 40%;
		z-index: 100;
		height: 2px;
		display: flex;
		align-items: center;
	}

	.stripes span {
		width: 60px;
		height: 5px;
		background-color: white;
		content: '';
		display: block;
		border-radius: 10px;
		margin: 1rem;
		cursor: pointer;
	}
`;

export const Slider = styled.div`
	width: 660px;
	height: 250px;
	background-color: #333;

	position: relative;
`;

const Slide = styled.div`
	position: absolute;
	width: 660px;
	height: 250px;
	overflow: hidden;
	opacity: 1;
	text-align: center;
	font-size: 74px;
	font-weight: bold;
	font-family: arial;
	color: #fff;
`;

export const Slide1 = styled(Slide)`
	background: red;
`;

export const Slide2 = styled(Slide)`
	background: blue;
`;

export const Slide3 = styled(Slide)`
	background: green;
`;

export const Button = styled.button`
	-webkit-appearance: button;
	padding: 5px;
	margin-right: 5px;
	margin-bottom: 5px;
`;

export const ProgressBar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 660px;
	height: 5px;
	background: rgba(255, 255, 255, 0.6);
`;

export const WithDrag = styled.div`
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100vh;

	.carousel-display {
		height: 100%;

		&__item {
			width: 33%;
			height: 100vh;
			position: absolute;
			border-left: 3px solid black;
			border-right: 3px solid black;
			background: grey;
			font-size: 38px;
			color: white;
			font-style: bold;
			text-align: center;
		}
	}
`;

export const AnotherTry = styled.div`
	height: 400px;
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

	.btn-box {
		top: 200px;
		z-index: 11;
		position: absolute;
		display: flex;
		justify-content: space-around;
	}

	.carousel-btn {
		width: 100px;
		height: 30px;
	}
`;

export const Card = styled.div`
	position: absolute;
	left: 0;
	// top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	.card {
		background-color: black;
		text-align: center;
		border-radius: 10px;
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

	&.is-next,
	&.is-prev {
		.next-btn {
			opacity: 0;
			transition: all 200ms linear 0s;
			width: 100px;
			height: 30px;
			position: absolute;
			top: 50%;
			right: 50%;
			transform: translateX(50px);
			color: black;
			z-index: 11;
		}

		&:hover {
			.next-btn {
				opacity: 1;
			}
		}
	}
`;
