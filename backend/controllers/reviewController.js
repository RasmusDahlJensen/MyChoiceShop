import { ReviewModel } from "../models/reviewModel.js";

class ReviewController{
    constructor(){
        console.log("ReviewController initiated");
    }

    findAll = async (req, res) => {
        try{
            const result = ReviewModel.findAll()
            res.json(result)
        } catch{
            res.json({error: "Error happend while trying to get reviews"})
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
                error: "Error happend while trying to get reviews",
                err_msg: err
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
        } catch{
            res.json({error: "Could Not Remove The Review."})
        }
        return true
    }

    findOne = async (req, res) => {
        const id = req.params.id;

        try{
            await ReviewModel.findOne({
                where: id
            })
        }catch(err){
            res.json({
                error: "Could not get review",
                err_msg: err
            })
        }
    }

}

export default ReviewController