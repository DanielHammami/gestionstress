import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// user : danielashe123
// pwd : DUCXlmAk8P1oUc9v

// mongodb+srv://danielashe123:DUCXlmAk8P1oUc9v@gestionstress.uvd3hdq.mongodb.net/?retryWrites=true&w=majority&appName=GestionStress

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server only after the database connection is established
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process with failure
  });

app.get("/", (req, res) => {
  res.send("API is running...");
});
