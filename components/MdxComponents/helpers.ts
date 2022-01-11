import * as React from 'react';

// elements to text
export const whitespacesRe = /\s+/g;
export const _format = (str = '') => str.trim().replace(whitespacesRe, ' ');

export const elementToTextRec = (x: any): any => {
	if (Array.isArray(x)) return x.map(elementToTextRec).join('');
	else if (React.isValidElement(x))
		return elementToTextRec(
			(x as any).children || (x as React.ReactElement<any>).props.children,
		);
	else if (typeof x === 'string') return x || '';

	return '';
};

export const elementToText = (node: any) => _format(elementToTextRec(node));
export const titleToDash = (title: any) =>
	elementToText(title)
		.toLowerCase()
		.replace(/[^\w\d\s]/g, '')
		.replace(/\s+/g, '-');
