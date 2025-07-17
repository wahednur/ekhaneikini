import { Server } from "http";

import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env.config";

let server: Server;
const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URI);
    console.log("MongoDB connected successfully");

    //Server listening
    server = app.listen(envVars.PORT, () => {
      console.log(`ekhaneikini.com server running on ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
