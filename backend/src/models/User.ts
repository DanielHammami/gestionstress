import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  progress: Array<{ moduleId: string; completed: boolean; score: number }>;
  notifications: Array<{ message: string; read: boolean }>;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  progress: [
    {
      moduleId: { type: Schema.Types.ObjectId, ref: "Module" },
      completed: { type: Boolean, default: false },
      score: { type: Number, default: 0 },
    },
  ],
  notifications: [
    {
      message: { type: String },
      read: { type: Boolean, default: false },
    },
  ],
});

const User = model<IUser>("User", userSchema);

export default User;
