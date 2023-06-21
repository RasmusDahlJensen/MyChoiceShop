import express from "express"
import ReviewController from "../controllers/reviewController.js"

const ReviewRouter = express.Router()

ReviewRouter.get("/reviews", (req, res) => {
    const review = new ReviewController()

    return review.findAll(req, res)
})

ReviewRouter.post("/review", (req, res) => {
    const review = new ReviewController()

    return review.add(req, res)
})

ReviewRouter.delete("/review/:id", (req, res) => {
    const review = new ReviewController()

    return review.delete(req, res)
})

ReviewRouter.get("/review/:id", (req, res) => {
    const review = new ReviewController()

    return review.findOne(req, res)
})

export default ReviewRouter