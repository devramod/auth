import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDatabase from "./database/connect.js";
import register from "./routes/register.js";
import login from "./routes/login.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Configuration
app.use(cors({ credentials: true, origin: process.env.CLIENT_BASE_URL }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.use("/api/v1/register", register);
app.use("/api/v1/login", login);

const startServer = async () => {
  try {
    connectDatabase(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log("Server running"));
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

startServer();
