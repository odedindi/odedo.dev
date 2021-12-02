import styled, { keyframes } from 'styled-components';

const sunRise = keyframes`  
0% {
    left: 45px;
    width: 2.1rem;
  }
  60% {
    left: 20px;
    width: 4rem;
  }
  100% {
    left: 2px;
  }`;

const sunSet = keyframes`  
    0% {
    left: 2px;
  }
  60% {
    left: 4px;
    width: 4rem;
  }
  100% {
    left: 51px;
    width: 2.1rem;
  }`;

export const Switch = styled.div`
	// borrowed from https://daily-dev-tips.com/posts/creating-day-night-css-only-toggle-switch/

	/** sunny side **/
	--blue-background: #c2e9f6;
	--blue-border: #72cce3;
	--blue-color: #96dcee;
	--yellow-background: #fffaa8;
	--yellow-border: #f5eb71;
	/** dark side **/
	--indigo-background: #808fc7;
	--indigo-border: #5d6baa;
	--indigo-color: #6b7abb;
	--gray-border: #e8e8ea;
	--gray-dots: #e8e8ea;
	/** general **/
	--white: #fff;

	:hover {
		cursor: pointer;
	}

	.checkbox {
		display: none;
	}
	.celestialBodies {
		cursor: pointer;
		/** Placeholder element, starting at blue **/
		width: 6rem;
		height: 3rem;
		background: var(--blue-color);
		border-radius: 100px;
		border: 5px solid var(--blue-border);
		display: flex;
		position: relative;
		transition: all 350ms ease-in;
		/** The sun cloud and moon stars **/
		/** Sun/Moon element **/
		/** Gray dots on the moon **/
	}
	.celestialBodiesBackground {
		width: 0.3rem;
		height: 0.15rem;
		border-radius: 5px;
		position: relative;
		background: var(--white);
		left: 67.5px;
		top: 12px;
		transition: all 150ms ease-in;
	}
	.celestialBodiesBackground:before {
		content: '';
		position: absolute;
		width: 1rem;
		height: 0.15rem;
		border-radius: 5px;
		background: var(--white);
		top: -3px;
		left: -12px;
		transition: all 150ms ease-in;
	}
	.celestialBodiesBackground:after {
		content: '';
		position: absolute;
		width: 1rem;
		height: 0.15rem;
		border-radius: 5px;
		background: var(--white);
		left: -3px;
		top: 2.5px;

		transition: all 150ms ease-in;
	}
	.celestialBodies:before {
		animation-name: ${sunRise};
		animation-duration: 350ms;
		animation-fill-mode: forwards;
		transition: all 350ms ease-in;
		content: '';
		width: 2.1rem;
		height: 2.1rem;
		border: 2.5px solid var(--yellow-border);
		top: 2px;
		left: 4px;
		position: absolute;
		border-radius: 2.1rem;
		background: var(--yellow-background);
	}
	//makteshim
	.celestialBodies:after {
		transition-delay: 0ms;
		transition: all 250ms ease-in;
		position: absolute;
		content: '';
		box-shadow: var(--gray-dots) -13px 0 0 2px,
			var(--gray-dots) -24px 14px 0 -2px;
		left: 77px;
		top: 7px;
		width: 7.5px;
		height: 7.5px;
		background: transparent;
		border-radius: 50%;
		opacity: 0;
	}
	.checkbox:checked {
		/** This will all flip from sun to moon **/
		/** Change the label color **/
	}
	.checkbox:checked ~ .background {
		background: var(--indigo-background);
	}
	.checkbox:checked + .celestialBodies {
		background: var(--indigo-color);
		border-color: var(--indigo-border);
		/** Change the cloud to stars **/
		/** Change the sun into the moon **/
		/** Show the dimples on the moon **/
	}
	.checkbox:checked + .celestialBodies .celestialBodiesBackground {
		left: 25px;
		width: 5px;
	}
	.checkbox:checked + .celestialBodies .celestialBodiesBackground:before {
		width: 3px;
		height: 3px;
		top: 7px;
	}
	.checkbox:checked + .celestialBodies .celestialBodiesBackground:after {
		width: 3px;
		height: 3px;
		left: -20px;
		top: 3px;
	}
	.checkbox:checked + .celestialBodies:before {
		background: var(--white);
		border-color: var(--gray-border);
		animation-name: ${sunSet};
		animation-duration: 350ms;
		animation-fill-mode: forwards;
	}
	.checkbox:checked + .celestialBodies:after {
		transition-delay: 350ms;
		opacity: 1;
	}
`;
