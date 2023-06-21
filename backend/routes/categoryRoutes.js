import express from "express"

const CategoryRouter = express.Router()

CategoryRouter.get("/products", (req, res) => {
    res.json("hey")
})

export default CategoryRouter