import dynamic from 'next/dynamic';
import * as React from 'react';
import { Viewer as ViewerType, ViewerProps } from '@toast-ui/react-editor';
import { SourceType } from '@toast-ui/editor';
import { TuiViewerWithForwardedProps } from './TuiViewerWrapper';

const Viewer = dynamic<TuiViewerWithForwardedProps>(
	() => import('./TuiViewerWrapper'),
	{ ssr: false },
);

// eslint-disable-next-line react/display-name
const ViewerWithForwardedRef = React.forwardRef<
	ViewerType | undefined,
	ViewerProps
>((props, ref) => (
	<Viewer {...props} forwardedRef={ref as React.MutableRefObject<ViewerType>} />
));

const ProperViewer: React.FC<ViewerProps> = (props) => {
	const { initialValue } = props;

	const viewerRef = React.useRef<ViewerType>();
	return (
		<div style={{ background: 'red' }}>
			<ViewerWithForwardedRef
				{...props}
				initialValue={
					initialValue ||
					`${`
                const bob = {
                    name: bob,
                    age: 20,
                };
                `}`
				}
				ref={viewerRef}
				referenceDefinition={true}
			/>
		</div>
	);
};

export default ProperViewer;
