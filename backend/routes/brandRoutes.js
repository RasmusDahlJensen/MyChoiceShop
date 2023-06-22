import express from "express"
import BrandController from "../controllers/brandController.js"

const brandRouter = express.Router()

brandRouter.get("/brands", (req, res) => {
    const brand = new BrandController()

    return brand.findAll(req, res)
})

export default brandRouter