import server from "./app.js";
import { connect } from "mongoose";
const PORT = 3001;

await connect("mongodb://localhost:27017/main");

server.listen(PORT, () => {
  console.log(`Server is running up on ${PORT}`);
});
