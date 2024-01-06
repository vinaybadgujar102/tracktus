import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import app from "./app";

dotenv.config();

connectDB()
.then( () => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${process.env.PORT || 8000}`);
  });
})
.catch((err) => {
  console.log("MongoDB connection failed!!! ", err);
});