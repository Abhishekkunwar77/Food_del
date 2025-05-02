import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email"],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Subscriber", subscriberSchema);
