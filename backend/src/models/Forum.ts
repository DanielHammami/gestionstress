import { Schema, model, Document } from "mongoose";

interface IPost {
  userId: Schema.Types.ObjectId;
  content: string;
  timestamp: Date;
}

interface IForum extends Document {
  topic: string;
  posts: IPost[];
}

const postSchema = new Schema<IPost>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const forumSchema = new Schema<IForum>({
  topic: { type: String, required: true },
  posts: [postSchema],
});

const Forum = model<IForum>("Forum", forumSchema);

export default Forum;
