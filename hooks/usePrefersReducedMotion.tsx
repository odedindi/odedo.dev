import * as React from 'react';

function usePrefersReducedMotion() {
	const [reduceMotion, setReduceMotion] = React.useState(
		() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
	);

	React.useEffect(() => {
		const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
		const handleMediaChange = () => setReduceMotion(mediaQuery?.matches);

		mediaQuery?.addEventListener('change', handleMediaChange);
		handleMediaChange();

		return () => {
			mediaQuery?.removeEventListener('change', handleMediaChange);
		};
	}, []);

	return reduceMotion;
}

export default usePrefersReducedMotion;
