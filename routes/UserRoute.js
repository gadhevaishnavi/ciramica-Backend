import express from "express";
import { registerUserController, loginUserController } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/register", registerUserController);
userRoute.post("/login", loginUserController);

export default userRoute;
