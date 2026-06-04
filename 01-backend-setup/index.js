import express from "express";
// import data from "./todo.json" with { type: "json" };
// console.log(data);
import { readFile, writeFile } from "node:fs/promises";

const data = JSON.parse(await readFile("./todo.json", "utf-8"));
console.log(data);

const app = express();

app.use("/api/v1", function (req, res, next) {
  next();
});

app
  .route("/api/v1/")
  .get(function (req, res) {
    res.status(200).json({
      message: "GET request done!",
    });
  })
  .post(function (req, res) {
    res.status(201).json({ message: "POST request done!" });
  })
  .put(function (req, res) {
    res.status(200).json({ message: "PUT request done!" });
  })
  .patch(function (req, res) {
    res.status(200).json({ message: "PATCH request done!" });
  })
  .delete(function (req, res) {
    res.status(204).json({ message: "DELETE request done!" });
  });

app.listen(8000, "127.0.0.1", () =>
  console.log("Server is running on PORT 8000"),
);
