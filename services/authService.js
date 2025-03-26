import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Service for registering a user
export const registerUser = async (userData) => {
  try {
    const { firstName, lastName, email, mobile, address, password } = userData;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      mobile,
      address,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return {
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// Service for logging in a user
export const loginUser = async (email, password) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // Compare the password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,  // Use secret key from .env
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    return {
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};