import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// Subscribe to newsletter
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    // Create new subscriber
    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all subscribers
router.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await Subscriber.find().select("email subscribedAt");
    res.status(200).json(subscribers);
  } catch (error) {
    console.error("Fetch subscribers error:", error);
    res.status(500).json({ message: "Server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const subscriber = await Subscriber.findByIdAndDelete(id);
    if (!subscriber) {
      return res.status(404).json({ message: "Subscriber not found" });
    }
    res.status(200).json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error("Delete subscriber error:", error);
    res.status(500).json({ message: "Server error" });
  }
});
export default router;