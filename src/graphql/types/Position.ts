import { extendType, idArg, objectType } from 'nexus';
import { Position as PositionT } from 'src/types/sourceTypes';

export const Position = objectType({
	name: 'Position',
	definition: (t) => {
		t.id('id')!;
		t.string('title')!;
		t.string('company')!;
		t.string('employmentType')!;
		t.string('location')!;
		t.string('startDate', { description: 'When I started at this position' })!;
		t.nullable.string('endDate');
		t.list.string('achievements')!;
	},
});

export const PositionQuery = extendType({
	type: 'Query',
	definition: (t) => {
		t.list.field('allMyPositions', {
			type: Position,
			description: 'Get all positions',
			resolve: (_root, _args, { db: { positions } }) => positions,
		});

		t.nullable.field('myPosition', {
			type: Position,
			description: 'Find a position by its ID',
			args: { id: idArg() },
			// @ts-ignore
			resolve: (_root, { id }: { id: string }, { db: { positions } }) =>
				positions.find((p: PositionT) => p.id === id),
		});

		t.list.field('allMyOtherExperiences', {
			type: Position,
			description: 'Get all other experiences',
			resolve: (_root, _args, { db: { otherExperience } }) => otherExperience,
		});

		t.nullable.field('myOtherExperience', {
			type: Position,
			description: 'Find an other experience by its ID',
			args: { id: idArg() },
			// @ts-ignore
			resolve: (_root, { id }: { id: string }, { db: { otherExperience } }) =>
				otherExperience.find((e: PositionT) => e.id === id),
		});
	},
});
