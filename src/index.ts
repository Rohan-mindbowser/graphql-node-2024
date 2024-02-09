import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { graphqlSchema as schema } from "./modules/index.js";
import { sequelize } from "./utils/dbConnection.js";
import { GraphQLError } from "graphql";

sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connection success");
    startServer();
  })
  .catch(() => {
    console.log("DB Connection failed");
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
        // console.log(token)
        return { token, sequelize };
      }
      return { sequelize };
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
