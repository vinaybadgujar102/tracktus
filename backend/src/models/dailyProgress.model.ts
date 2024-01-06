import { Schema, model, Document } from "mongoose"

const dailyProgressSchema = new Schema({
    habitId: {
        type: Schema.Types.ObjectId,
        ref: "Habit",
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true})

export const DailyProgress = model("DailyProgrss", dailyProgressSchema);