import { Sequelize, DataTypes } from "sequelize";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import express from "express";
import ProductRouter from "./routes/productRoutes.js";

dotenv.config();

// Create an Express application
const app = express();
const port = process.env.PORT;

// Parse request bodies as JSON
app.use(express.json());

// Parse URL-encoded request bodies
app.use(
	express.urlencoded({
		extended: true,
	})
);

// Products route
app.get("/products", (req, res) => {
	res.send("Products");
});

// Register UserRouter for handling user-related routes
app.use(ProductRouter);

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

// Start the server
app.listen(port, () => {
	console.log(`Express app http://localhost:${port}`);
});
