import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class ProductModel extends Model {}

ProductModel.init({
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
        allowNull: true
    },
    price: {
        types: DataTypes.FLOAT,
        allowNull: true
    },
    image: {
        types: DataTypes.STRING,
        allowNull: true
    },
    description: {
        types: DataTypes.TEXT,
        allowNull: true,
    },
    rating: {
        types: DataTypes.INTEGER,
        allowNull: true,
    },
    quantity: {
        types: DataTypes.INTEGER,
        allowNull: false
    },
    review: {
        types: DataTypes.INTEGER,
        allowNull: true
    }
})

export {ProductModel}