import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//DB uri
var uri = `${process.env.DB_URI}${process.env.DB}`;

mongoose.connect(uri);

export const connection = mongoose.connection;
