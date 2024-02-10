import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const getUserFromToken = async (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};
