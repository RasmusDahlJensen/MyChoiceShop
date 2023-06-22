import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//models
import { UserModel } from "../models/userModel.js";
import { ReviewModel } from "../models/reviewModel.js";

import dotenv from "dotenv";
dotenv.config();

UserModel.hasMany(ReviewModel);
ReviewModel.belongsTo(UserModel);

class UserController {
	constructor() {
		console.log("User Controller initialized");
	}

	async create(req, res) {
		try {
			const {
				username,
				email,
				firstname,
				lastname,
				password,
				address,
				is_active,
			} = req.body;
			const hashedPassword = await bcrypt.hash(password, 10);

			const user = await UserModel.create({
				username,
				email,
				firstname,
				lastname,
				address,
				password: hashedPassword,
				is_active,
			});
			console.log("User created:", user.toJSON());
			res.status(201).json({ message: "User created successfully", user });
		} catch (error) {
			console.error("Failed to create user:", error);
			res.status(500).json({ error: "Failed to create user" });
		}
	}

	async list(req, res) {
		try {
			const users = await UserModel.findAll({
				attributes: ["id", "username", "firstname", "lastname", "address"],
				include: ReviewModel,
			});
			res.status(200).json(users);
		} catch (error) {
			console.error("Failed to retrieve users:", error);
			res.status(500).json({ error: "Failed to retrieve users" });
		}
	}

	async update(req, res) {
		try {
			const UserId = req.params.id;
			const { username, email, firstname, lastname, address, password } =
				req.body;

			const user = await UserModel.findByPk(UserId);

			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}

			if (password) {
				const hashedPassword = await bcrypt.hash(password, 10);
				await user.update({
					username,
					email,
					firstname,
					lastname,
					address,
					password: hashedPassword,
				});
			} else {
				await user.update({
					username,
					email,
					firstname,
					lastname,
					address,
				});
			}

			console.log("User updated:", user.toJSON());
			res.status(200).json({ message: "User updated successfully", user });
		} catch (error) {
			console.error("Failed to update User:", error);
			res.status(500).json({ error: "Failed to update User" });
		}
	}

	async delete(req, res) {
		try {
			const userId = req.params.id;
			const user = await UserModel.findByPk(userId);

			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}

			await user.destroy();

			console.log("User deleted:", user.toJSON());
			res.status(200).json({ message: "User deleted successfully" });
		} catch (error) {
			console.error("Failed to delete user:", error);
			res.status(500).json({ error: "Failed to delete user" });
		}
	}

	async login(req, res) {
		try {
			const { email, password } = req.body;

			// Find the user by email
			const user = await UserModel.findOne({ where: { email } });
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}

			// Compare the provided password with the stored hashed password
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(401).json({ error: "Invalid email or password" });
			}

			// Generate a JWT token
			const token = jwt.sign({ userId: user.id }, process.env.JWTKEY, {
				expiresIn: "1h",
			});

			// Return user information along with the token
			res.status(200).json({ token, user });
		} catch (error) {
			console.error("Login error:", error);
			res.status(500).json({ error: "Failed to log in" });
		}
	}

	generateToken(user) {
		const payload = {
			id: user.id,
			username: user.username,
			email: user.email,
		};

		const token = jwt.sign(payload, process.env.JWTKEY, { expiresIn: "1h" });
		return token;
	}
}

export default UserController;
