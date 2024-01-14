import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as bookTypeDefs } from "./book/schema.js";
import { resolvers as bookResolvers } from "./book/bookResolvers.js";

export const graphqlSchema = makeExecutableSchema({
  typeDefs: [bookTypeDefs],
  resolvers: [bookResolvers],
});
