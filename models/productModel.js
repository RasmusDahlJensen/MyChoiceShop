import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.sequelize.js";

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
		brand: {
			type: DataTypes.STRING,
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
		rating: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		review: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "Product",
	}
);

export { ProductModel };
