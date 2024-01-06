import mongoose, { Schema, model, Document } from "mongoose";

interface IHabit extends Document {
  name: string;
  description?: string;
  target: Number;
  frequency: {
    type: "daily" | "custom",
    customDays?: ["mon", "tue", "wed", "thu", "fri", "sat"]
  }
}

const habitSchema = new Schema<IHabit>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  target: {
    type: Number,
    required: true,
  },
  frequency: {
    type: {
      type: String,
      required: true,
      enum: ["daily", "custom"],
    },
    customDays: {
        type: [{
            type: String,
            enum: ["mon", "tue", "wed", "thu", "fri", "sat", "thuda"]
        }],
        default: undefined,
    }
  },
}, {timestamps: true});

export const Habit = model("Habits", habitSchema);
