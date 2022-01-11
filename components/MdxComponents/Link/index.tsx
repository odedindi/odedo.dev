import styled from 'styled-components';
import UnstyledLink from 'next/link';

import { red, blmGrey, lightGrey } from '../colors';

export const StyledLink = styled.a`
	display: inline-block;
	color: inherit;
	cursor: pointer;
	padding: 2rem 8rem;
	margin: -2rem -8rem;
	@media (min-width: 1000 / 16em) {
		border-radius: 3rem;
		&:hover {
			background: ${lightGrey};
		}
	}
`;

export const InlineLink = styled.a.attrs((/* props */) => ({
	target: '_blank',
	rel: 'noopener',
}))`
	color: ${(p) => (p['data-white' as keyof typeof p] ? 'white' : blmGrey)};
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		color: ${(p) => (p['data-white' as keyof typeof p] ? 'white' : red)};
	}
`;

type LinkProps = {
	['aria-label']?: string;
	className?: string;
	inline?: boolean;
	unstyled?: any;
	white?: any;
	href: string;
};
const Link: React.FC<LinkProps> = ({
	['aria-label']: ariaLabel,
	children,
	className,
	inline,
	unstyled,
	white,
	...rest
}) => {
	let Child = StyledLink;
	if (inline) Child = InlineLink;

	const dataAttrs = white ? { 'data-white': white } : {};

	return (
		<UnstyledLink {...rest}>
			{unstyled ? (
				<a
					aria-label={ariaLabel}
					href={rest.href}
					className={className}
					{...dataAttrs}>
					{children}
				</a>
			) : (
				<Child
					aria-label={ariaLabel}
					href={rest.href}
					className={className}
					{...dataAttrs}>
					{children}
				</Child>
			)}
		</UnstyledLink>
	);
};

export default Link;
