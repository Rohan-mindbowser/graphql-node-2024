import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { graphqlSchema as schema } from "./modules/index.js";
import { GraphQLError } from "graphql/error/index.js";

const server = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const token = req.headers.authorization || "";

    return token;
  },
});

console.log(`🚀  Server ready at: ${url}`);
