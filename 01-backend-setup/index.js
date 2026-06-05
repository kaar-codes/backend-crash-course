// app.use("/api/v1", function (req, res, next) {
//   next();
// });

// app
//   .route("/api/v1/")
//   .get(function (req, res) {
//     res.status(200).json({
//       message: "GET request done!",
//     });
//   })
//   .post(function (req, res) {
//     res.status(201).json({ message: "POST request done!" });
//   })
//   .put(function (req, res) {
//     res.status(200).json({ message: "PUT request done!" });
//   })
//   .patch(function (req, res) {
//     res.status(200).json({ message: "PATCH request done!" });
//   })
//   .delete(function (req, res) {
//     res.status(204).json({ message: "DELETE request done!" });
//   });
import express from "express";
import { writeFile } from "node:fs/promises";
import data from "./todo.json" with { type: "json" };

const app = express();

app.get("/tasks{/:taskId}", (req, res) => {
  const { taskId } = req.params;
  if (taskId) {
    const result = data.find((val) => val.id === taskId);
    if (result) {
      res
        .status(200)
        .json({ message: `Task of ID ${taskId} is found`, result });
    } else {
      res.status(404).json({ message: `No task found with that ID` });
    }
  } else {
    const result = data.map((val) => {
      return { id: val.id, task: val.task };
    });

    res.status(200).json({
      message: "Task from the ToDo list",
      totalTasks: data.length,
      result,
    });
  }
});

app.post("/task/create", express.json(), async (req, res) => {
  const input = req.body;
  const totalTasks = data.push({ id: `00${data.length + 1}`, ...input });
  await writeFile("./todo.json", JSON.stringify(data), "utf-8");
  res
    .status(201)
    .json({ message: "Task has been creaated", totalTasks, result: data });
});

app.listen(8000, () => console.log("Server is running on PORT 8000"));
