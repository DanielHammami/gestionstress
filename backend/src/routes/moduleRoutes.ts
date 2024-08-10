import { Router } from "express";
import Module from "../models/Module";

const router = Router();

// Obtenir tous les modules
router.get("/", async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(500).json({ message: errorMessage });
  }
});

// Créer un nouveau module
router.post("/", async (req, res) => {
  const { title, description, content, quizzes } = req.body;
  const newModule = new Module({ title, description, content, quizzes });

  try {
    await newModule.save();
    res.status(201).json(newModule);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(500).json({ message: errorMessage });
  }
});

export default router;
