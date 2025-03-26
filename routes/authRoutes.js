import express from "express";
import { registerController, loginController } from "../controllers/authController.js";

const authRoute = express.Router();

// POST route for user registration
authRoute.post("/register", registerController);

// POST route for user login
authRoute.post("/login", loginController);

export default authRoute;
