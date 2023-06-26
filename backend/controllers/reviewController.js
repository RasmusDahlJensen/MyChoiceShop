import { ReviewModel } from "../models/reviewModel.js";
import { UserModel } from "../models/userModel.js"

ReviewModel.hasOne(UserModel)
UserModel.hasMany(ReviewModel)

class ReviewController{
    constructor(){
        console.log("ReviewController initiated");
    }

    findAll = async (req, res) => {
        try{
            const result = await ReviewModel.findAll()
            res.json(result)
        } catch(err){
            res.json({
                error: err,
                errMsg: "Something went wrong trying to fetch the data" 
            })
        }
        return true
    }

    add = async (req, res) => {
        const {user_id, product_id, rating, comment} = req.body
        console.log(user_id, product_id, rating, comment);
        try{
            const result =  await ReviewModel.create({
                user_id,
                product_id,
                rating,
                comment,
            })
            res.json(result)
        } catch(err){
            res.json({
                error: err,
                errMsg: "Something went wrong trying to fetch the data" 
            })
        }
        return true
    }

    delete = async (req, res) => {
        let id = req.params.id;

        try{
            await ReviewModel.destroy({
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

    findOne = async (req, res) => {
        const id = req.params.id;
        try{
            const result = await ReviewModel.findOne({
                where: {
                    id
                }
            })
            res.json(result)
        }catch(err){
            res.json({
                error: err,
                errMsg: "Something went wrong trying to fetch the data" 
            })
        }
    }

}

export default ReviewController