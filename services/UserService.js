import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_secret_key";  // Replace with an environment variable in production

// ✅ User Registration Service
export const registerUser = async (userData) => {
    try {
        const { firstName, lastName, email, mobile, address, password } = userData;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return { success: false, message: "User already exists" };
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new userModel({
            firstName,
            lastName,
            email,
            mobile,
            address,
            password: hashedPassword,
        });

        await newUser.save();
        return { success: true, message: "User registered successfully" };
    } catch (error) {
        console.error(`Error in registerUser: ${error.message}`);
        return { success: false, message: "Failed to register user" };
    }
};

// ✅ User Login Service
export const loginUser = async (email, password) => {
    try {
        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return { success: false, message: "User not found" };
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { success: false, message: "Invalid credentials" };
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

        return { success: true, message: "Login successful", token };
    } catch (error) {
        console.error(`Error in loginUser: ${error.message}`);
        return { success: false, message: "Failed to log in" };
    }
};
