import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class UserModel extends Model {
	// Static method to find a user by their credentials
	static async findByCredentials(email, password) {
		// Find a user in the database based on the provided email
		const user = await UserModel.findOne({ where: { email } });

		// If no user is found, throw an error indicating invalid email or password
		if (!user) {
			throw new Error("Invalid email or password");
		}

		// Compare the provided password with the hashed password stored in the database
		const isMatch = await bcrypt.compare(password, user.password);

		// If the passwords don't match, throw an error indicating invalid email or password
		if (!isMatch) {
			throw new Error("Invalid email or password");
		}

		// If the user is found and the password matches, return the user object
		return user;
	}
}

UserModel.init(
	{
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "User",
		freezeTableName: true,
		underscored: true,
		createdAt: true,
		updatedAt: false,
	}
);

export { UserModel };
