import styled, { css } from 'styled-components';

export const C = {
	cubeWidth: '2.5rem',
	cubeHeight: '2.5rem',
	cubeDepth: '2.5rem',
	faceColor: 'rgba(255,0,0,0)',
	borderColor: 'rgba(255,0,0,0)',
	inColor: '#ED213A',
	midColor: '#247BA0',
	outColor: '#B51916',
	faceDuration: 0.025,
	staggerOffset: 0.75,
	easing: 'sine.inOut',
};

export const Front = styled.div``;
export const Back = styled.div``;

export const Left = styled.div``;
export const Right = styled.div``;

export const Top = styled.div``;
export const Bottom = styled.div``;

export const FaceWrap = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	background: rgba(red, 0.2);
	transform-style: preserve-3d;
`;

const face = ($cColor: string) => css`
	position: absolute;
	left: 0;
	top: 0;
	background: ${$cColor};
`;
const cuboid = ({
	$cWidth,
	$cHeight,
	$cDepth,
	$cColor,
}: {
	$cWidth: string;
	$cHeight: string;
	$cDepth: string;
	$cColor: string;
}) =>
	css`
		--depth: ${$cDepth};
		--width: ${$cWidth};
		--height: ${$cHeight};

		position: relative;
		width: ${$cWidth};
		height: ${$cHeight};
		transform-style: preserve-3d;

		${Front} {
			${face($cColor)};
			width: ${$cWidth};
			height: ${$cHeight};
			transform: translateZ(calc(var(--depth) / 2));
		}

		${Back} {
			${face($cColor)};
			width: ${$cWidth};
			height: ${$cHeight};
			transform: translateZ(calc(var(--depth) / 2 * -1)) rotateY(180deg);
		}

		${Left} {
			${face($cColor)};
			width: ${$cDepth};
			height: ${$cHeight};
			transform: translateX(calc(var(--depth) / 2 * -1)) rotateY(-90deg);
		}

		${Right} {
			${face($cColor)};
			width: ${$cDepth};
			height: ${$cHeight};
			transform: translateX(calc(var(--width) - var(--depth) / 2))
				rotateY(90deg);
		}

		${Top} {
			${face($cColor)};
			width: ${$cWidth};
			height: ${$cDepth};
			transform: translateY(calc(var(--depth) / 2 * -1)) rotateX(90deg);
		}

		${Bottom} {
			${face($cColor)};
			width: ${$cWidth};
			height: ${$cDepth};
			transform: translateY(calc(var(--height) - var(--depth) / 2))
				rotateX(-90deg);
		}
	`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	perspective: 1024px;
	visibility: hidden;
	transform: rotateZ(90deg);
`;

export const Scene = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	transform-style: preserve-3d;
	background-blend-mode: overlay;
`;

export const Cubes = styled.div`
	transform-style: preserve-3d;
	transform: rotateX(-35deg) rotateY(45deg);
`;

export const Cube = styled.div`
	${cuboid({
		$cWidth: C.cubeWidth,
		$cHeight: C.cubeHeight,
		$cDepth: C.cubeDepth,
		$cColor: C.faceColor,
	})};

	margin: 0.5rem;

	${Left} {
		${FaceWrap} {
			transform: rotateZ(90deg);
		}
	}

	${Right} {
		${FaceWrap} {
			transform: rotateZ(-90deg);
		}
	}
	${Top} {
		${FaceWrap} {
			transform: rotateZ(-90deg);
		}
	}

	${Bottom} {
		${FaceWrap} {
			transform: rotateZ(-90deg);
		}
	}
	transform-style: preserve-3d;
`;

export const FacePanel = styled.div`
	flex: 1 0 auto;
	width: 20%;
	background: ${C.inColor};
	transform: scaleY(0);
	opacity: 0;
	box-shadow: 0px 0px 40px rgba(#c7eafd, 0.3);
`;
