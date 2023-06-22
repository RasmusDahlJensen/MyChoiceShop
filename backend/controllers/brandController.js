import { BrandModel } from "../models/brandModel.js";

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
}

export default BrandController