import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config();

connectDB();