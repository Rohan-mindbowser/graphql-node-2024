import { generateJwtToken } from "../../utils/jwtAuthentication.js";

export const resolvers = {
  Mutation: {
    createUser: (_, { email, password }, context) => {
      const userToken = generateJwtToken<any>({ email, time: new Date() });
      return {
        email: email,
        accessToken: userToken,
        refreshToken: userToken,
        message: "User created..!",
      };
    },
  },
};
