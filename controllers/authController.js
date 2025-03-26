// controllers/authController.js
import { registerUser, loginUser } from "../services/authService.js";

// Controller for registering a user
export const registerController = async (req, res) => {
  const { firstName, lastName, email, mobile, address, password } = req.body;

  // Call the register service
  const result = await registerUser({ firstName, lastName, email, mobile, address, password });

  // Check the result and send response
  if (result.success) {
    return res.status(201).json({
      message: result.message,
      user: result.user,
    });
  }

  // If registration failed, return the error message
  return res.status(400).json({
    message: result.message,
  });
};

// Controller for logging in a user
export const loginController = async (req, res) => {
  const { email, password } = req.body;

  // Call the login service
  const result = await loginUser(email, password);

  // Check the result and send response
  if (result.success) {
    return res.status(200).json({
      message: result.message,
      token: result.token,
      user: result.user,
    });
  }

  // If login failed, return the error message
  return res.status(400).json({
    message: result.message,
  });
};
