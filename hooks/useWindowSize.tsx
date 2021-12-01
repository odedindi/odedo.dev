import * as React from 'react';

interface WindowSize {
	width: number;
	height: number;
}

const useWindowSize = (): WindowSize => {
	const getSize: () => WindowSize = React.useCallback(
		() => ({
			width: window.innerWidth,
			height: window.innerHeight,
		}),
		[],
	);

	const [windowSize, setWindowSize] = React.useState<WindowSize>(() =>
		getSize(),
	);

	const handleResize = React.useCallback(() => {
		setWindowSize(getSize());
	}, [getSize]);

	React.useLayoutEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [getSize, handleResize]);

	return windowSize;
};

export default useWindowSize;
