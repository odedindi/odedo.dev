// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// ================== hooks ===================
import { useGSAPTimeline, useLayoutEffect } from 'hooks';
import { useTheme } from 'styled-components';
// =================== gsap ===================
import { gsap } from 'gsap';

export const TransitionLayout: React.FC = ({ children }) => {
	const theme = useTheme();

	const getBackground = React.useCallback(
		() => theme.colors.background.primary,
		[theme.colors.background.primary],
	);

	const [background, setBackground] = React.useState(() => getBackground());
	React.useEffect(() => {
		setBackground(getBackground());
	}, [getBackground]);

	const [displayChildren, setDisplayChildren] = React.useState(() => children);
	const el = React.useRef<HTMLDivElement>(undefined!);

	const { timeline } = useGSAPTimeline();

	useLayoutEffect(() => {
		if (children !== displayChildren) {
			// if there are no outro animations, immediately transit
			if (timeline.duration() === 0) return setDisplayChildren(children);

			timeline.play().then(() => {
				// outro complete so reset to an empty paused timeline
				timeline.seek(0).pause().clear();
				setDisplayChildren(children);
			});
		}
	}, [children, displayChildren, timeline]);

	useLayoutEffect(() => {
		const animation = gsap.to(el.current, {
			background,
			duration: 0.5,
			ease: 'power3',
		});
		return () => {
			animation.kill(); // cleanup
		};
	}, [background]);

	return <S.LayoutWrapper ref={el}>{displayChildren}</S.LayoutWrapper>;
};

export default TransitionLayout;
