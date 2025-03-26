import { registerUser, loginUser } from "../services/userService.js";

// ✅ Controller for User Registration
export const registerUserController = async (req, res) => {
    try {
        const userData = req.body;  // Get user data from request body
        const response = await registerUser(userData);

        if (!response.success) {
            return res.status(400).json(response);
        }
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Controller for User Login
export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;  // Get email and password from request body
        const response = await loginUser(email, password);

        if (!response.success) {
            return res.status(401).json(response);
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
