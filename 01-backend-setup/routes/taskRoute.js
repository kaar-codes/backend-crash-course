import { Router } from "express";
import { createTask, getTaskWithId } from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.get("/:id", getTaskWithId);
taskRouter.post("/create", createTask);

export { taskRouter };
