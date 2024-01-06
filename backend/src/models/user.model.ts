import mongoose, { Schema, model } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  fullName: string;
  habits: string[];
  refreshToken?: string;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  fullName: {
    type: String,
    required: true,
  },
  habits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habits"
    }
  ],
  refreshToken: {
    type: String,
  }
},{timestamps: true});

export const User = model("Users", UserSchema);