import mongoose from "mongoose";

interface IUser {
  name: string;
  age: number;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  age: Number,
});

export const User = mongoose.model("Users", UserSchema);