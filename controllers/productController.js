import { ProductModel } from "../models/productModel.js";

class productController {
	constructor() {
		console.log("User Controller initialized");
	}

	// creates a product
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
}

export default productController;
