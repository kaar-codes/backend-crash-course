import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    taskMaster: String,
    description: String,
  },
  {
    versionKey: false,
  },
);

const TaskModel = model("Tasks", taskSchema);

export { TaskModel };
