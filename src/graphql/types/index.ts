import { asNexusMethod, decorateType } from 'nexus';
import { GraphQLDate, GraphQLURL } from 'graphql-scalars';
export * from './Bio';
export * from './Education';
export * from './Position';

export const GQLDate = asNexusMethod(GraphQLDate, 'date');
export const GQURL = asNexusMethod(GraphQLURL, 'url');

// export const GQURL = decorateType(GraphQLURL, {
// 	sourceType: 'URL',
// 	asNexusMethod: 'url',
// });
