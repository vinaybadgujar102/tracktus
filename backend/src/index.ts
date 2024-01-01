import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { dbConfig } from "./config/dbConfig";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

mongoose
  .connect(dbConfig.connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(express.json());
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
