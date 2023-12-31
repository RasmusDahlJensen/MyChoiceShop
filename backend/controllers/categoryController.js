import { BrandModel } from "../models/brandModel.js";
import { CategoryModel } from "../models/categoryModel.js"
import { ProductModel } from "../models/productModel.js";

CategoryModel.hasMany(ProductModel);
ProductModel.belongsTo(CategoryModel);

class CategoryController {
    constructor(){
        console.log("Category controller initiated");
    }

    findAll = async (req, res) => {
        try{
            const result = await CategoryModel.findAll({
                include: [
                    {
                        model: ProductModel,
                        limit: 10,
                    }
                ]
            })
        
            res.json(result)
        }catch(err){
            res.json({
                error: err,
                errMsg: "Something went wrong trying to fetch the data" 
            })
        }
        
        return true
    }

    create = async (req, res) => {
        // get name from req
        let {name} = req.body
        
        console.log(name);
        //clean name up
        name = name.toLowerCase().trim()
    
        try{
            const result = await CategoryModel.create({
                name,
            })
            res.send(result)
        } catch(err){
            res.json({
                error: err,
                errMsg: "Something went wrong trying to insert the data" 
            })
        }

        return true
    }

    delete = async (req, res) => {
        let id = req.params.id;

        try{
            await CategoryModel.destroy({
                where: {
                    id
                }
            })
            
            res.json({msg: "Sucessfully Deleted"})
        } catch(err){
            res.json({
                error: err,
                errMsg: "Something went wrong trying to delete the data" 
            })
        }

        return true
    }

    update = async (req, res) => {
        let {id, name} = req.body;
        name = name.toLowerCase().trim()
    
        try{
            const result = await CategoryModel.update({
                name,
            }, {
                where: {
                    id
                }
            })
            res.send({msg: "Sucessfully Updated Category to " + name})
        } catch(err){
            res.json({
                error: err,
                errMsg: "Something went wrong trying to update the data" 
            })  
        }

        return true
    }

    findProducts = async (req, res) => {
        const {id} = req.params
        try{
            const result = await CategoryModel.findOne({
                where: {
                    id
                },
                include: ProductModel
            })
        
            res.json(result)
        }catch(err){
            res.json({
                error: err,
                errMsg: "Something went wrong trying to fetch the data" 
            })
        }
        
        return true
    }

}

export default CategoryController