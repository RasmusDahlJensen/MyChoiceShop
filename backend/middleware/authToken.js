import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Middleware function to authenticate the token
const authenticateToken = (req, res, next) => {
	// Get the token from the authorization header
	const token = req.headers.authorization?.split(" ")[1];

	// Check if the token exists
	if (!token) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	try {
		// Verify and decode the token using the JWT secret key
		const decoded = jwt.verify(token, process.env.JWTKEY);

		// Store the decoded token in the request object
		req.user = decoded;

		// Continue
		next();
	} catch (error) {
		// Return 401 Unauthorized if the token is invalid or expired
		return res.status(401).json({ error: "Invalid token" });
	}
};

export default authenticateToken;
