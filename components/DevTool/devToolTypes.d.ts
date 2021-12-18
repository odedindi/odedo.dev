type DevToolsProps = {
	devTools: DevTool[];
	title: string;
};
type DevToolLinkType = {
	content: JSX.Element | any | string;
	href: string;
	noStyle?: boolean;
	title?: string;
};
