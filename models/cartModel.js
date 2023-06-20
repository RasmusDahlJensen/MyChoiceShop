import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class CartModel extends Model {}

CartModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

export {CartModel}