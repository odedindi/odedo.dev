import dynamic from 'next/dynamic';
import * as React from 'react';
import {
	Viewer,
	Editor as EditorType,
	EditorProps,
} from '@toast-ui/react-editor';
import { SourceType } from '@toast-ui/editor';
import { TuiEditorWithForwardedProps } from './TuiEditorWrapper';

interface EditorPropsWithHandlers extends EditorProps {
	onChange?: (
		param:
			| any
			| {
					source: SourceType | 'viewer';
					data: MouseEvent;
			  },
	) => void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(
	() => import('./TuiEditorWrapper'),
	{ ssr: false },
);

// eslint-disable-next-line react/display-name
const EditorWithForwardedRef = React.forwardRef<
	EditorType | undefined,
	EditorPropsWithHandlers
>((props, ref) => (
	<Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

interface Props extends EditorProps {
	onChange: (
		value:
			| string
			| {
					source: SourceType | 'viewer';
					data: MouseEvent;
			  },
	) => void;

	valueType?: 'markdown' | 'html';
}

const ProperEditor: React.FC<Props> = (props) => {
	const {
		initialValue,
		previewStyle,
		height,
		initialEditType,
		useCommandShortcut,
	} = props;

	const editorRef = React.useRef<EditorType>();
	const handleChange = React.useCallback(() => {
		if (!editorRef.current) return;

		const instance = editorRef.current.getInstance();
		const valueType = props.valueType || 'markdown';

		props.onChange(
			valueType === 'markdown' ? instance.getMarkdown() : instance.getHtml(),
		);
	}, [props, editorRef]);

	return (
		<div>
			<EditorWithForwardedRef
				{...props}
				initialValue={initialValue || 'hello react editor world!'}
				previewStyle={previewStyle || 'vertical'}
				height={height || '600px'}
				initialEditType={initialEditType || 'markdown'}
				useCommandShortcut={useCommandShortcut || true}
				ref={editorRef}
				onChange={handleChange}
				hideModeSwitch={false}
				referenceDefinition={true}
			/>
		</div>
	);
};

export default ProperEditor;
