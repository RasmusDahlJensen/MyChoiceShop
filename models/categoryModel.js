import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class CategoryModel extends Model {}

CategoryModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: "category",
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
})

export {CategoryModel}