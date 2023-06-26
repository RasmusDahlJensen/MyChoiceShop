import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class ProductModel extends Model {}

ProductModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "product",
		freezeTableName: true,
		underscored: true,
		createdAt: false,
		updatedAt: false,
	}
);

export { ProductModel };
