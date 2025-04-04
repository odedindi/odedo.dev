"use client";

import { FC } from "react";

export const LinkedIn: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			role="img"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<rect width="24" height="24" fill="#0077B5" />
			<path
				fill="#ffffff"
				d="M3.8 8h3.8v11H3.8V8zm1.9-5C4.3 3 3.5 3.8 3.5 4.9S4.3 7 5.7 7s2-.9 2-2.1c0-1.1-.9-2-2-2zM9 8h3.8v1.7c.6-.9 1.6-2 3.5-2 2.6 0 4.7 1.7 4.7 5.2v6.1h-3.9v-5.6c0-1.5-.6-2.5-2-2.5-1.1 0-1.7.7-2 1.3-.2.3-.2.7-.2 1.2v5.6H9V8z"
			/>
		</svg>
	);
};
