import { TaskModel } from "../models/taskModel.js";

export const getTaskWithId = async (req, res) => {
  res.status(200).json({
    status: "Success",
    message: `${req.params.id} is the TASK ID asked for`,
  });
};

export const createTask = async (req, res) => {
  const data = req.body;
  await TaskModel.insertOne(data);
  res
    .status(201)
    .json({ status: "Success", message: "Task created succesfully" });
};
