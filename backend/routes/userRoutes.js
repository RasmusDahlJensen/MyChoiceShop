import express from "express";
import UserController from "../controllers/userController.js";

const controller = new UserController();
const UserRouter = express.Router();

UserRouter.get("/users", async (req, res) => {
	console.log("Handling user get request (GETE)");
	controller.list(req, res);
});

UserRouter.post("/users/create", async (req, res) => {
	console.log("Handling user create request (POST)");
	controller.create(req, res);
});

UserRouter.put("/users/update/:id", async (req, res) => {
	console.log("Handling user update request (PUT)");
	controller.update(req, res);
});

UserRouter.delete("/users/delete/:id", async (req, res) => {
	console.log("Handling user delete request (DELETE)");
	controller.delete(req, res);
});


export default UserRouter;
