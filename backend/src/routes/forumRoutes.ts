import { Router } from "express";
import Forum from "../models/Forum";

const router = Router();

// Obtenir tous les forums
router.get("/", async (req, res) => {
  try {
    const forums = await Forum.find();
    res.json(forums);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(500).json({ message: errorMessage });
  }
});

// Créer un nouveau forum
router.post("/", async (req, res) => {
  const { topic, posts } = req.body;
  const newForum = new Forum({ topic, posts });

  try {
    await newForum.save();
    res.status(201).json(newForum);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(500).json({ message: errorMessage });
  }
});
