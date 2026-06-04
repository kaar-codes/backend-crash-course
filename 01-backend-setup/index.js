import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.status(200).json({
    message: "Successfully Reached End!",
    customPoperty: req.customPoperty,
  });
});

app.listen(8000, "127.0.0.1", () =>
  console.log("Server is running on PORT 8000"),
);
