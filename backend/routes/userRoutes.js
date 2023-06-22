import express from "express";
import UserController from "../controllers/userController.js";

//Middleware import
import authenticateToken from "../middleware/authToken.js";

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

UserRouter.post("/users/login", async (req, res) => {
	console.log("Handling user login request");
	controller.login(req, res);
});

//Test if login is successful and token is valid
UserRouter.get("/users/test", authenticateToken, (req, res) => {
	res.status(200).json({ message: "Authenticated" });
});

export default UserRouter;
