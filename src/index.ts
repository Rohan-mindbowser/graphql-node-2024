import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { graphqlSchema as schema } from "./modules/index.js";
import { connection } from "./utils/dbConnection.js";
import { getUserFromToken } from "./utils/getUserFromToken.js";
import { GraphQLError } from "graphql";

//Checking DB connection here
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
  startServer();
});

async function startServer() {
  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }: any) => {
      const token = req.headers.authorization;
      if (token) {
        var decodedToken = await getUserFromToken(token);
        if (!decodedToken) {
          throw new GraphQLError(
            "You are not authorized to perform this action.",
            {
              extensions: {
                code: "FORBIDDEN",
              },
            }
          );
        }
        return { decodedToken };
      }
      return {};
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
