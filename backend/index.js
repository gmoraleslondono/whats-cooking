import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import homeRoute from "./routes/home.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", homeRoute);

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
