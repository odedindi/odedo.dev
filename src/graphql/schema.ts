import { makeSchema } from 'nexus';

import * as types from './types';
import { join } from 'path';
export const schema = makeSchema({
	types,
	contextType: {
		module: join(process.cwd(), 'src', 'graphql', 'context.ts'),
		export: 'Context',
	},
	outputs: {
		schema: true, // means schema.graphql in the root
		typegen: join(
			process.cwd(),
			'node_modules/@types/nexus-typegen-custom/index.d.ts',
		),
	},
});
