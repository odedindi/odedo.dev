import { extendType, idArg, objectType } from 'nexus';

export const Education = objectType({
	name: 'Education',
	definition: (t) => {
		t.id('id')!;
		t.string('title')!;
		t.string('institute')!;
		t.string('location')!;
		t.string('link')!;
		t.date('startDate', { description: 'When I started at this education' })!;
		t.nullable.string('endDate')!;
		t.list.string('description')!;
	},
});

export const EducationQuery = extendType({
	type: 'Query',
	definition: (t) => {
		t.list.field('allMyEducation', {
			type: Education,
			description: 'Get all education',
			// @ts-ignore
			resolve: (_root, _args, { db: { education } }) => education,
		});

		t.nullable.field('myEducation', {
			type: Education,
			description: 'Find an education by its ID',
			args: { id: idArg() },
			// @ts-ignore
			resolve: (_root, { id }: { id: string }, { db: { education } }) =>
				education.find((e) => e.id === id),
		});
	},
});
