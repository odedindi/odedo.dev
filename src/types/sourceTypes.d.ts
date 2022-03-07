export interface Bio {
	name: string;
	tagline: string;
	email: string;
	github: string;
	website: string;
	linkedin: string;
	objective: string;
	skills: Skill[];
}

export type Skill = string;

export interface Position {
	id: string;
	title: string;
	company: string;
	startDate: string;
	endDate?: string;
	location: string;
	employmentType: string;
	achievements: string[];
}

export interface Education {
	id: string;
	title: string;
	institute: string;
	link: string;
	startDate: string;
	endDate: string;
	location: string;
	description: string[];
}
