import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const generateJwtToken = function <T>(data: T) {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  return jwt.sign(data, jwtSecretKey);
};
