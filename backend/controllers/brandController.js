import { BrandModel } from "../models/brandModel.js";
import { ProductModel } from "../models/productModel.js";

ProductModel.hasOne(BrandModel)
BrandModel.hasMany(ProductModel)

class BrandController {
    constructor(){
        console.log("BrandController initiated")
    }

    findAll = async (req, res) => {
        try{
            const result = await BrandModel.findAll()
            res.json(result)
        }catch(err){
            res.send({
                error: err,
                errMsg: "Something went wrong trying to fetch the data" 
            })
        }
        
        return true
    }  

    create = async (req, res) => {
        // get name from req
        let {name} = req.body
    
        //clean name up
        name = name.toLowerCase().trim()
    
        try{
            const result = await BrandModel.create({
                name,
            })
            res.send(result)
        } catch{
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
            await BrandModel.destroy({
                where: {
                    id
                }
            })
            
            res.json({
                msg: "Sucessfully Deleted"
            })
        } catch{
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
            const result = await BrandModel.update({
                name,
            }, {
                where: {
                    id
                }
            })

            res.send({
                msg: `Sucessfully Updated Category to ${name}`
            })
        } catch{
            res.json({
                error: err,
                errMsg: "Something went wrong trying to update the data" 
            })
        }

        return true
    }
}

export default BrandController