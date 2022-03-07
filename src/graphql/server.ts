import { ApolloServer } from 'apollo-server-micro';
import { context } from './context';
import { schema } from './schema';
const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

export const server = new ApolloServer({
	schema,
	context,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
