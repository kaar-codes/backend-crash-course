import { Router } from "express";
import {
  createTask,
  getTaskWithId,
  filterTask,
} from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.get("/:id", getTaskWithId);
taskRouter.get("/", filterTask);
taskRouter.post("/create", createTask);

export { taskRouter };
