import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected || DB Host: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.log("MongoDB connection error: ", err);
        process.exit(1);
    }
};

export default connectDB;