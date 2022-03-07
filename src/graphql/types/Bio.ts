import { extendType, objectType } from 'nexus';

export const Bio = objectType({
	name: 'Bio',
	definition(t) {
		t.string('name')!;
		t.string('tagline')!;
		t.string('email')!;
		t.string('objective')!;
		t.string('github')!;
		t.string('website')!;
		t.string('linkedin')!;
		t.list.string('skills')!;
	},
});
export const BioQuery = extendType({
	type: 'Query',
	definition: (t) => {
		t.field('myBio', {
			type: Bio,
			description: 'all my bio',
			// @ts-ignore
			resolve: (_root, _args, { db: { bio } }) => bio,
		});
		t.field('me', {
			type: Bio,
			description: 'my name and tagline',
			resolve: (_root, _args, { db: { bio } }) => ({
				name: bio.name,
				tagline: bio.tagline,
			}),
		});
		t.field('myObjective', {
			type: Bio,
			description: 'my objective',
			resolve: (_root, _args, { db: { bio } }) => ({
				objective: bio.objective,
			}),
		});
		t.field('myContacts', {
			type: Bio,
			description: 'my contact options',
			// @ts-ignore
			resolve: (_root, _args, { db: { bio } }) => ({
				email: bio.email,
				github: bio.github,
				linkedin: bio.linkedin,
				website: bio.website,
			}),
		});
	},
});
