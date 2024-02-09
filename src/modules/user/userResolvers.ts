import { accessToken, refreshToken } from "../../utils/jwtAuthentication.js";
import bcrypt from "bcrypt";

export const resolvers = {
  Mutation: {
    createUser: async (_, { email, password }, { sequelize }) => {
      try {
        const userAccessToken = accessToken<any>({ email, time: new Date() });
        const userRefreshToken = refreshToken<any>({
          email,
          time: new Date(),
        });
        const hashPassword = await bcrypt.hash(password, 10);

        return {
          email: email,
          password: hashPassword,
          accessToken: userAccessToken,
          refreshToken: userRefreshToken,
          message: "User created..!",
        };
      } catch (error) {}
    },
  },
};
