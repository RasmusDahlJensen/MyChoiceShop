import express from "express";
import ProductController from "../controllers/productController.js";

// Create an instance of the productController
const controller = new ProductController();
const ProductRouter = express.Router();

// Endpoint for creating a user
ProductRouter.post("/products/create", (req, res) => {
	console.log("Handling user creation request (POST)");
	controller.create(req, res);
});

export default ProductRouter;
