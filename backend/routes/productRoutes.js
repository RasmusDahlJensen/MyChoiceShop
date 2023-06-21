import express from "express";
import ProductController from "../controllers/productController.js";

const controller = new ProductController();
const ProductRouter = express.Router();

ProductRouter.post("/products/create", async (req, res) => {
	console.log("Handling product create request (POST)");
	controller.create(req, res);
});

ProductRouter.get("/products", async (req, res) => {
	console.log("Handling product get request (GET)");
	controller.list(req, res);
});

ProductRouter.put("/products/update/:id", async (req, res) => {
	console.log("Handling product update request (PUT)");
	controller.update(req, res);
});

export default ProductRouter;
