import { User } from "../../models/userModel.js";
import { accessToken, refreshToken } from "../../utils/jwtAuthentication.js";
import bcrypt from "bcrypt";

export const resolvers = {
  Mutation: {
    createUser: async (_, { email, password, fullName }, {}) => {
      try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          email,
          password: hashPassword,
          fullName,
        });
        await user.save();
        const userAccessToken = accessToken<any>({
          id: user._id.toHexString(),
          email,
          time: new Date(),
        });
        const userRefreshToken = refreshToken<any>({
          email,
          time: new Date(),
        });
        return {
          id: user._id.toHexString(),
          password: hashPassword,
          accessToken: userAccessToken,
          refreshToken: userRefreshToken,
          message: "User created..!",
        };
      } catch (error) {}
    },
  },
};
