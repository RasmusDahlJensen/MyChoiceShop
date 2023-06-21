import express from "express"

//model & controller
import CategoryController from "../controllers/categoryController.js"

//create category router
const CategoryRouter = express.Router()

//category routes starts here
CategoryRouter.get("/category", (req, res) => {
    const category = new CategoryController()

    return category.findAll(req, res)
})
// add category
CategoryRouter.post("/category", (req, res) => {
    const category = new CategoryController()

    return category.create(req, res)
})
//update category
CategoryRouter.put("/category", (req, res) => {
    const category = new CategoryController()

    return category.update(req, res)
})
// delete category
CategoryRouter.delete("/category/:id", (req, res) => {
    const category = new CategoryController()

    return category.delete(req, res)
})
//#### category routes end here ####

export default CategoryRouter