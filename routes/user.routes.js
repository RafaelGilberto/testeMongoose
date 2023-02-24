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

userRouter.get("/allUsers", async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Algo deu errado" });
  }
});

userRouter.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await UserModel.findById(id);
    if (!singleUser) {
      return res.status(404).json("Não encontrado");
    }
    return res.status(200).json(singleUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Algo deu errado" });
  }
});

userRouter.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAlbum = await AlbumModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedAlbum);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Algo deu errado" });
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await AlbumModel.findByIdAndDelete(id);
    return res.status(200).json(deleteUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Algo deu errado" });
  }
});

export default userRouter;
