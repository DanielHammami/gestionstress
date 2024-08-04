import { Schema, model, Document } from "mongoose";

interface IModule extends Document {
  title: string;
  description: string;
  content: string;
  quizzes: Array<{
    question: string;
    options: string[];
    correctAnswer: string;
  }>;
}

const moduleSchema = new Schema<IModule>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  quizzes: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true },
    },
  ],
});

const Module = model<IModule>("Module", moduleSchema);

export default Module;
