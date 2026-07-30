import express from "express";
import cors from "cors";
import env from "./config/env.js";
import routes from "./routes/index.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: env.frontendUrl === "*" ? true : env.frontendUrl.split(",").map((s) => s.trim()),
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ success: true, message: "AIxperts Labs API is running." });
});

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

export default app;
