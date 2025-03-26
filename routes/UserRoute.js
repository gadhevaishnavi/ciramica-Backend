import express from "express";
import { registerUserController, loginUserController } from "../controllers/UserController.js";

const userRoute = express.Router();

userRoute.post("/register", registerUserController);
userRoute.post("/login", loginUserController);

export default userRoute;
