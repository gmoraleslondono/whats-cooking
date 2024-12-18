import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import homeRoute from "./routes/home.js";
import suggestionRoute from "./routes/suggestion.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", homeRoute);
app.use("/api/suggestion", suggestionRoute);

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
