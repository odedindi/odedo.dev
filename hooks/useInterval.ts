import * as React from 'react';

type UseInterval = (callback: any, delay: any, reset: any) => void;

const useInterval: UseInterval = (callback, delay, reset) => {
	const savedCallback = React.useRef<any>();

	React.useEffect(() => {
		savedCallback.current = callback;
	});

	React.useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay, reset]);
};

export default useInterval;
