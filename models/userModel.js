import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.sequelize.js";

class UserModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
    firstname : {
       type: DataTypes.STRING,
       allowNull: false 
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false 
    }
})

export {UserModel}