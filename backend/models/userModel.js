import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class UserModel extends Model {
	static async findByCredentials(email, password) {
		const user = await UserModel.findOne({ where: { email } });
		if (!user) {
			throw new Error("Invalid email or password");
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			throw new Error("Invalid email or password");
		}

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
