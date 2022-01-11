import * as React from 'react';
import { GSAPTimelineContext } from 'components/Providers/GSAPTimeline';

export const useGSAPTimeline = () => React.useContext(GSAPTimelineContext);

export default useGSAPTimeline;
