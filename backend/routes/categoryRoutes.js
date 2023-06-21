import express from "express";

//model
import { CategoryModel } from "../models/categoryModel.js";

//create category router
const CategoryRouter = express.Router();

//category routes starts here
CategoryRouter.get("/category", async (req, res) => {
	const result = await CategoryModel.findAll();
	res.json(result);
});
CategoryRouter.post("/category", async (req, res) => {
	let { name } = req.body;

	name = name.toLowerCase().trim();

	try {
		const result = await CategoryModel.create({
			name,
		});
		res.send(result);
	} catch {
		res.json({ error: "Could not add The category." });
	}
});
CategoryRouter;
//## category routes end here

export default CategoryRouter;
