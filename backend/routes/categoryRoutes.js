import express from "express";

const CategoryRouter = express.Router();

CategoryRouter.get("/category", (req, res) => {
	res.json("hey");
});

export default CategoryRouter;
