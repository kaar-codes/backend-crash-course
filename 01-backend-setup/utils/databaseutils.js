import { connect } from "mongoose";
import { TaskModel } from "../models/taskModel.js";

await connect("mongodb://localhost:27017/main");

const deleteAllTasks = async () => {
  await TaskModel.collection.drop();
};

await deleteAllTasks();
