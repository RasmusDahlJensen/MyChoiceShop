import express from "express";
import ProductController from "../controllers/productController.js";

// Create an instance of the productController
const controller = new ProductController();
const ProductRouter = express.Router();

ProductRouter.post("/products/create", async (req, res) => {
	console.log("Handling product create request (POST)");
	controller.create(req, res);
});

export default ProductRouter;
