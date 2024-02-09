import { accessToken, refreshToken } from "../../utils/jwtAuthentication.js";
import bcrypt from "bcrypt";
import { User } from "../../models/userModel.js";

export const resolvers = {
  Mutation: {
    createUser: async (_, { email, password }, { sequelize }) => {
      try {
        const result = await sequelize.transaction(async (t) => {
          const user = await User.create(
            {
              email: email,
              fullName: "Rohan",
              lastName: password,
            },
            { transaction: t }
          );
          return user;
        });

        console.log("user-->", result);

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
