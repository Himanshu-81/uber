import dotenv from "dotenv";
import cors from "cors";
import express from "express";

import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use("/api/v1/users", userRoutes);

export { app };
