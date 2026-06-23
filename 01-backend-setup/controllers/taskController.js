import { TaskModel } from "../models/taskModel.js";

export const getTaskWithId = async (req, res) => {
  const data = req.params.id;
  const response = await TaskModel.findById(data);
  res.status(200).json({
    status: "Success",
    response,
  });
};

export const createTask = async (req, res) => {
  const data = req.body;
  const response = await TaskModel.insertOne(data);
  res
    .status(201)
    .json({ status: "Success", message: "Task created succesfully", response });
};

export const filterTask = async (req, res) => {
  const data = req.query;
  const response = await TaskModel.aggregate([
    {
      $match: {
        $or: [
          { taskMaster: data.taskMaster },
          { description: data.description },
        ],
      },
    },
    {
      $unset: ["_id"],
    },
  ]);
  res.json({ status: "Success", response });
};
