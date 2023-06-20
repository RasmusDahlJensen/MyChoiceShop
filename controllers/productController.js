import dotenv from "dotenv";

dotenv.config();
//  Initializes a new instance of the UserController.
class productController {
	constructor() {
		console.log("User Controller initialized");
	}
	//  creates a product
	async create(req, res) {
		console.log("Create controller fired");
	}
}

export default productController;

// Sync the Sequelize models with the database
// sequelize
// 	.sync()
// 	.then(() => {
// 		console.log("Sequelize models synced with the database.");

// 		// Perform database operations using Sequelize
// 		// Example: Create a new user
// 		User.create({ name: "John Doe", email: "johndoe@example.com" })
// 			.then((user) => {
// 				console.log("User created:", user.toJSON());
// 			})
// 			.catch((error) => {
// 				console.error("Failed to create user:", error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.error("Sequelize sync error:", error);
// 	});

// Perform Supabase operations
// Example: Retrieve all users from Supabase
// supabase
// 	.from("users")
// 	.select("*")
// 	.then((response) => {
// 		console.log("Users retrieved from Supabase:", response.data);
// 	})
// 	.catch((error) => {
// 		console.error("Failed to retrieve users from Supabase:", error);
// 	});
