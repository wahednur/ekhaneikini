import dotenv from "dotenv";
import z from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().min(2, "PORT is required"),
  DB_URI: z.string().url("DB_URI must be a valid MongoDB URL"),
  NODE_ENV: z
    .enum(["development", "production"])
    .refine((val) => val === "development" || val === "production", {
      message: "NODE_ENV must be 'development' or 'production'",
    }),
  JWT_SECRET: z.string(),
  JWT_EXP_IN: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_REFRESH_EXP: z.string(),
  BCRYPT_SALT: z.string(),
  SUPER_ADMIN_EMAIL: z.string().email("Invalid SUPER_ADMIN_EMAIL"),
  SUPER_ADMIN_PASSWORD: z
    .string()
    .min(8, "SUPER_ADMIN_PASSWORD must be at least 8 characters"),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_CALLBACK_URL: z
    .string()
    .url("GOOGLE_CALLBACK_URL must be a valid URL"),
  EXPRESS_SESSION_SECRET: z.string(),
  FRONTEND_URL: z.string().url("FRONTEND_URL must be a valid URL"),
});
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Environment variable validation failed:");
  console.error(parsedEnv.error.format());
  process.exit(1);
}

export const envVars = parsedEnv.data;
