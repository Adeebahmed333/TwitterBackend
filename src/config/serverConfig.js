import { config } from "dotenv";
import { genSaltSync } from "bcrypt";
config();

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const SALT = genSaltSync(13);
export const JWT_SECRET = process.env.JWT_SECRET;
export const AWS_REGION = process.env.AWS_REGION;
export const AWS_SECRET_ACCESS_KEY= process.env.AWS_SECRET_ACCESS_KEY;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
export const BUCKET_NAME=process.env.BUCKET_NAME;