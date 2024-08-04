import { Schema, model, Document } from "mongoose";

interface INotification extends Document {
  userId: Schema.Types.ObjectId;
  message: string;
  read: boolean;
  timestamp: Date;
}

const notificationSchema = new Schema<INotification>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
});

const Notification = model<INotification>("Notification", notificationSchema);

export default Notification;
