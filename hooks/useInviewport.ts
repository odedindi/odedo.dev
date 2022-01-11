import * as React from 'react';

type UseInViewport = (
	elementRef: any,
	unobserveOnIntersect: any,
	options: any,
	shouldObserve: boolean,
) => boolean;

const useInViewport: UseInViewport = (
	elementRef,
	unobserveOnIntersect,
	options = {},
	shouldObserve = true,
) => {
	const [intersect, setIntersect] = React.useState(false);
	const [isUnobserved, setIsUnobserved] = React.useState(false);

	React.useEffect(() => {
		if (!elementRef?.current) return;
		const observer = new IntersectionObserver(([entry]) => {
			const { isIntersecting, target } = entry;

			setIntersect(isIntersecting);

			if (isIntersecting && unobserveOnIntersect) {
				observer.unobserve(target);
				setIsUnobserved(true);
			}
		}, options);

		if (!isUnobserved && shouldObserve) {
			observer.observe(elementRef.current);
		}

		return () => observer.disconnect();
	}, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);

	return intersect;
};

export default useInViewport;
