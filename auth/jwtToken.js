import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Ensure JWT_SECRET is defined
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

/**
 * Generate a JWT token
 * @param {Object} payload - Data to include in the token (e.g., email)
 * @returns {String} - Signed JWT token
 */
export const getToken = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }); // Token expires in 1 hour
    console.log("Generated Token:", token);
    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Failed to generate token");
  }
};

/**
 * Verify a JWT token
 * @param {String} token - The JWT token to verify
 * @param {String} email - The email to validate against the token payload
 * @returns {Boolean} - True if the token is valid and matches the email, false otherwise
 */
export const verifyToken = (token, email) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    console.log(`Payload email: ${payload.email}`);

    // Ensure the email in the payload matches the provided email
    return payload.email === email;
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return false; // Return false if the token is invalid or expired
  }
};

/**
 * Middleware to authenticate a JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Next middleware function
 */
export const authenticateToken = (req, res, next) => {
  const authHeader = req.header('Authorization'); // Get the Authorization header

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Access Denied. No Token Provided.' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token after "Bearer"

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = verified; // Attach user info to the request object
    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    console.error("Error authenticating token:", error.message);
    return res.status(403).json({ success: false, message: 'Invalid or Expired Token' });
  }
};