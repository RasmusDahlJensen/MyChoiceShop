import bcrypt from "bcrypt";
import { UserModel } from "../models/userModel.js";

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
				attributes: ["username", "firstname", "lastname", "address"],
			});
			res.status(200).json(users);
		} catch (error) {
			console.error("Failed to retrieve users:", error);
			res.status(500).json({ error: "Failed to retrieve users" });
		}
	}
}

export default UserController;
