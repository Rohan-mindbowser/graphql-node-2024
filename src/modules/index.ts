import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as bookTypeDefs } from "./book/schema.js";
import { typeDefs as userTypeDefs } from "./user/schema.js";
import { resolvers as bookResolvers } from "./book/bookResolvers.js";
import { resolvers as userResolvers } from "./user/userResolvers.js";

export const graphqlSchema = makeExecutableSchema({
  typeDefs: [bookTypeDefs, userTypeDefs],
  resolvers: [bookResolvers, userResolvers],
});
