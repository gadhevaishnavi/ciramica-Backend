import express from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/UserController.js';

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.get('/users', getAllUsers);  // ✅ Get all users

export default userRoute;