import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authenticateToken = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWTKEY);
		req.user = decoded;
		next();
	} catch (error) {
		return res.status(401).json({ error: "Invalid token" });
	}
};

export default authenticateToken;
