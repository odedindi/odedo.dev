// navigation

type Page = 'home' | 'about' | 'portfolio';


// footer
type ContactSource =
	| 'facebook'
	| 'linkedin'
	| 'github'
	| 'discord'
	| 'email';

type ContactLink = string;
type ContactLinks = {
	[typeParameter in SocialSource]: ContactLink;
};
