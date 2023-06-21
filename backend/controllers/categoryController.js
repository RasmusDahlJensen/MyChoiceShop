import { CategoryModel } from "../models/categoryModel.js"

class CategoryController {
    constructor(){
        console.log("Category controller initiated");
    }

    findAll = async (req, res) => {
        const result = await CategoryModel.findAll()
        
        res.json(result)
        
        return true
    }

    create = async (req, res) => {
        // get name from req
        let {name} = req.body
    
        //clean name up
        name = name.toLowerCase().trim()
    
        try{
            const result = await CategoryModel.create({
                name,
            })
            res.send(result)
        } catch{
            res.json({"error": "Could not add The category."})
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
        } catch{
            res.json({error: "Could not Remove The category."})
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
        } catch{
            res.json({"error": "Could not add The category."})
        }

        return true
    }

}

export default CategoryController