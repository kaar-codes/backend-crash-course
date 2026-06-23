import server from "./app.js";
import { connect } from "mongoose";
const PORT = 3001;

async function connectDB() {
  try {
    await connect("mongodb://localhost:27017/main");
    console.log("DB connection succeed");
  } catch (err) {
    console.log(err.message);
  }
}

connectDB();

server.listen(PORT, () => {
  console.log(`Server is running up on ${PORT}`);
});
