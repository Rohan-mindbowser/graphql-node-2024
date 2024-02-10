import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as bookTypeDefs } from "./book/schema.js";
import { typeDefs as userTypeDefs } from "./user/schema.js";
import { resolvers as bookResolvers } from "./book/bookResolvers.js";
import { resolvers as userResolvers } from "./user/userResolvers.js";
import { typeDefs as productTypeDefs } from "./product/schema.js";
import { resolvers as productResolvers } from "./product/productResolver.js";

export const graphqlSchema = makeExecutableSchema({
  typeDefs: [bookTypeDefs, userTypeDefs, productTypeDefs],
  resolvers: [bookResolvers, userResolvers, productResolvers],
});
