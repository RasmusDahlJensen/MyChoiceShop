import express from "express"
import { sequelize } from "../config/db.sequelize.js"

// models
import { CartModel } from "../models/cartModel.js"
import { CategoryModel } from "../models/categoryModel.js"
import { ProductModel } from "../models/productModel.js"
import { ReveiwModel } from "../models/reviewModel.js"
import { UserModel } from "../models/userModel.js"


const initRouter = express.Router()

initRouter.get("/init", (req, res) => {
    try{
        sequelize.sync()
        res.sendStatus(200)
    } catch(err){
        res.send("error: \n" + err).sendStatus(400)
    }
})


export {initRouter}