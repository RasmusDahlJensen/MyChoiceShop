import bcrypt from "bcrypt";

//models
import { UserModel } from "../models/userModel.js";
import { ReviewModel } from "../models/reviewModel.js";

UserModel.hasMany(ReviewModel)
ReviewModel.belongsTo(UserModel)

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
				include: ReviewModel
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

			const User = await UserModel.findByPk(UserId);

			if (!User) {
				return res.status(404).json({ error: "User not found" });
			}

			await User.update({
				username,
				email,
				firstname,
				lastname,
				address,
				password,
			});

			console.log("User updated:", User.toJSON());
			res.status(200).json({ message: "User updated successfully", User });
		} catch (error) {
			console.error("Failed to update User:", error);
			res.status(500).json({ error: "Failed to update User" });
		}
	}
}

export default UserController;
