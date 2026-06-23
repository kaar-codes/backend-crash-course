import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    taskMaster: String,
    description: String,
    status: {
      type: String,
      enum: ["In Progress", "Backlog", "In Testing", "Done", "Waiting for Fix"],
    },
  },
  {
    versionKey: false,
  },
);

const TaskModel = model("Tasks", taskSchema);

export { TaskModel };
