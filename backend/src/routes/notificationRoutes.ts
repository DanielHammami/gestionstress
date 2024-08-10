import { Router } from "express";
import Notification from "../models/Notification";

const router = Router();

router.get("/:userId", async (req, res) => {
  try {
    const notifications = await Notification.find({
      userId: req.params.userId,
    });
    res.json(notifications);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(500).json({ message: errorMessage });
  }
});

router.post("/", async (req, res) => {
  try {
    const { userId, message } = req.body;
    const newNotification = new Notification({ userId, message });

    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(400).json({ message: errorMessage });
  }
});
