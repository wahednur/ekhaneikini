import cors from "cors";
import express, { Application } from "express";

//App declaration
const app: Application = express();
app.use(cors());
