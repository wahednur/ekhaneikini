import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import expressSession from "express-session";
import statusCode from "http-status-codes";

//App declaration
const app: Application = express();

//Used middlewares
app.use(
  expressSession({
    secret: "Your secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(statusCode.OK).json({
    message: "Welcome to ekhaneikini.com backend server",
  });
});
export default app;
