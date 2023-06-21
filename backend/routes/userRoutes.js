import express from "express";
import UserController from "../controllers/userController.js";

const controller = new UserController();
const UserRouter = express.Router();

UserRouter.post("/users/create", async (req, res) => {
	console.log("Handling user create request (POST)");
	controller.create(req, res);
});

export default UserRouter;
