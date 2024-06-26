import mongoose from "mongoose";

const ActivityLogSchema = mongoose.Schema(
  {
    Username: {
      type: String,
      required: [true, "Please enter a username"],
    },
    Activity: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

const ActivityLog = mongoose.model("activity_log", ActivityLogSchema);

export default ActivityLog;
