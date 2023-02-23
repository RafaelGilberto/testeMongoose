import express from "express";
import UserModel from "../models/user.models.js";

const userRouter = express.Router();

userRouter.get("/welcome", (req, res) => {
  return res.status(200).json("Bem vindo!!");
});

userRouter.post("/create-user", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Algo deu errado" });
  }
});

export default userRouter;
