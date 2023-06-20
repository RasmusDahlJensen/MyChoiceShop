import dotenv from "dotenv";
import { initRouter } from "./routes/init.sequelize.js";
import express from "express";
import ProductRouter from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(initRouter);

// Start the server
app.listen(4000, () => {
	console.log(`Express app http://localhost:4000`);
});

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
app.use(initRouter)
