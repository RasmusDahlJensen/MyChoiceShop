import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class BrandModel extends Model {}

BrandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    sequelize,
    modelName: "brands",
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
})

export {BrandModel}