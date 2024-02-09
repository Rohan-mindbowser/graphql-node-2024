import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const accessToken = function <T>(data: T) {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  return jwt.sign(data, jwtSecretKey, { expiresIn: "60m" });
};

export const refreshToken = function <T>(data: T) {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  return jwt.sign(data, jwtSecretKey, { expiresIn: "30d" });
};
