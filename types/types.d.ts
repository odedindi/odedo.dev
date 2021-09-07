// navigation
type Page = 'home' | 'about' | 'portfolio';

// footer
type ContactSource = 'facebook' | 'linkedin' | 'github' | 'discord' | 'email';

type FacebookLink = 'https://www.facebook.com/oded.winberger/';
type LinkedinLink = 'https://www.linkedin.com/in/odedw/';
type GithubLink = 'https://github.com/odedindi';
type DiscordLink = 'https://discordapp.com/users/804035729201037353';
type EmailLink = 'mailto:oded.winberger@gmail.com';

type ContactLink =
	| FacebookLink
	| LinkedinLink
	| GithubLink
	| DiscordLink
	| EmailLink;
type ContactLinks = {
	[typeParameter in SocialSource]: ContactLink;
};

// useFadeInFadeOut
type FadingComponent = {
	id: string;
	component: JSX.Element;
};

// about page
type LogoId = string;
type DevTool = {
	id: LogoId;
	logo: JSX.Element | any;
	link: string;
};

type DevToolsProps = {
	devTools: DevTool[];
	title: string;
};
