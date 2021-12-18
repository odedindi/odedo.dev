// =============== React & Next ===============
import * as React from 'react';
import Link from 'next/link';
// ============================================

export const DevToolLink = ({
	content,
	href,
	noStyle,
	title,
}: DevToolLinkType) => (
	<Link href={href} passHref>
		<a
			target="_blank"
			rel="noopener noreferrer"
			title={title}
			style={(noStyle as boolean) ? {} : { borderBottom: 'none' }}>
			{content}
		</a>
	</Link>
);

export default DevToolLink;
