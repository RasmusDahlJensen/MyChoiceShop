import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class CartModel extends Model {}

CartModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "cart",
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
})

export {CartModel}