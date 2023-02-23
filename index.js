import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());

dotenv.config();

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}`);
});

connect();
