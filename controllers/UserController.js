import { createUser, getUser, checkUserExists } from "../services/UserService.js";
import { hashPasswordFun, validatePassword } from "../helper/encryption.js";
import { getToken } from "../auth/jwtToken.js";

//  Register User
export const register = async (req, res) => {
    let { name, mobile, email, password } = req.body;
    
    try {
        // Check if user already exists
        if (await checkUserExists(email, mobile)) {
            return res.status(400).json({ message: "User already registered" });
        }

        // Hash password and create user
        let hashedPassword = await hashPasswordFun(password);
        let result = await createUser({ name, mobile, email, password: hashedPassword });

        if (result.success) {
            return res.status(201).json(result);
        } else {
            return res.status(400).json(result);
        }
    } catch (error) {
        console.error("Error in register:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// ✅ User Login
export const userLogin = async (req, res) => {
    let { email, password } = req.body;

    try {
        console.log("Login request received with email:", email);

        // Fetch user by email
        let user = await getUser(email);
        console.log("User fetched from database:", user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Validate password
        let isValidPassword = await validatePassword(password, user.password);
        console.log("Is password valid?", isValidPassword);

        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        let token = getToken({ email });
        console.log("Generated JWT token:", token);

        return res.status(200).json({ token, message: "User login successful" });
    } catch (error) {
        console.error("Error in userLogin:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};