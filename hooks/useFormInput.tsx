import * as React from 'react';

const useFormInput = (initialValue = '') => {
	const [value, setValue] = React.useState(initialValue);
	const [error, setError] = React.useState<any>();
	const [isDirty, setIsDirty] = React.useState(false);

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setValue(target.value);
		setIsDirty(true);

		// Resolve errors as soon as input becomes valid
		if (error && target.checkValidity()) {
			setError(null);
		}
	};

	const handleInvalid = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Prevent native errors appearing
		event.preventDefault();
		setError(event.target.validationMessage);
	};

	const handleBlur = (event: any) => {
		// Only validate when the user has made a change
		if (isDirty) {
			event.target.checkValidity();
		}
	};

	return {
		value,
		error,
		onChange: handleChange,
		onBlur: handleBlur,
		onInvalid: handleInvalid,
	};
};

export default useFormInput;
