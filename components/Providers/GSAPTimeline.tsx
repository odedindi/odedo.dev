import * as React from 'react';

import gsap from 'gsap';

interface GSAPTimelineContext {
	timeline: gsap.core.Timeline;
	setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
}

export const GSAPTimelineContext = React.createContext<GSAPTimelineContext>(
	undefined!,
);
const { Provider } = GSAPTimelineContext;

const GSAPTimeLingProvider: React.FC = ({ children }) => {
	const [timeline, setTimeline] = React.useState(() =>
		gsap.timeline({ paused: true }),
	);

	return <Provider value={{ timeline, setTimeline }}>{children}</Provider>;
};

export default GSAPTimeLingProvider;
