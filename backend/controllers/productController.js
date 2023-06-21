import { ProductModel } from "../models/productModel.js";

class ProductController {
	constructor() {
		console.log("Product Controller initialized");
	}

	async create(req, res) {
		try {
			const {
				product_name,
				brand,
				category_id,
				price,
				image,
				description,
				rating,
				quantity,
				review,
			} = req.body;
			const product = await ProductModel.create({
				product_name,
				brand,
				category_id,
				price,
				image,
				description,
				rating,
				quantity,
				review,
			});
			console.log("Product created:", product.toJSON());
			res
				.status(201)
				.json({ message: "Product created successfully", product });
		} catch (error) {
			console.error("Failed to create product:", error);
			res.status(500).json({ error: "Failed to create product" });
		}
	}

	async list(req, res) {
		try {
			const products = await ProductModel.findAll();
			res.status(200).json(products);
		} catch (error) {
			console.error("Failed to retrieve products:", error);
			res.status(500).json({ error: "Failed to retrieve products" });
		}
	}

	async update(req, res) {
		try {
			const productId = req.params.id;
			const {
				product_name,
				brand,
				category_id,
				price,
				image,
				description,
				rating,
				quantity,
				review,
			} = req.body;

			const product = await ProductModel.findByPk(productId);

			if (!product) {
				return res.status(404).json({ error: "Product not found" });
			}

			await product.update({
				product_name,
				brand,
				category_id,
				price,
				image,
				description,
				rating,
				quantity,
				review,
			});

			console.log("Product updated:", product.toJSON());
			res
				.status(200)
				.json({ message: "Product updated successfully", product });
		} catch (error) {
			console.error("Failed to update product:", error);
			res.status(500).json({ error: "Failed to update product" });
		}
	}
}

export default ProductController;
