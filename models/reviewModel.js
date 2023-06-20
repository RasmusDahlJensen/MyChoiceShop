import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class ReveiwModel extends Model {}

ReveiwModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    comment: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

export {ReveiwModel}