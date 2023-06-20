import { Sequelize, DataTypes } from "sequelize";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

// Create a Sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: "postgres",
});

// Define a model using Sequelize
const User = sequelize.define("User", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Sync the Sequelize models with the database
sequelize
	.sync()
	.then(() => {
		console.log("Sequelize models synced with the database.");

		// Perform database operations using Sequelize
		// Example: Create a new user
		User.create({ name: "John Doe", email: "johndoe@example.com" })
			.then((user) => {
				console.log("User created:", user.toJSON());
			})
			.catch((error) => {
				console.error("Failed to create user:", error);
			});
	})
	.catch((error) => {
		console.error("Sequelize sync error:", error);
	});

// Perform Supabase operations
// Example: Retrieve all users from Supabase
supabase
	.from("users")
	.select("*")
	.then((response) => {
		console.log("Users retrieved from Supabase:", response.data);
	})
	.catch((error) => {
		console.error("Failed to retrieve users from Supabase:", error);
	});
