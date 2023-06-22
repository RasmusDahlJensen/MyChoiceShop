import dotenv from "dotenv";
import { initRouter } from "./routes/init.sequelize.js";
import express from "express";

//routers
import ProductRouter from "./routes/productRoutes.js";
import CategoryRouter from "./routes/categoryRoutes.js";
import ReviewRouter from "./routes/reviewRouter.js";
import UserRouter from "./routes/userRoutes.js";
import brandRouter from "./routes/brandRoutes.js";

dotenv.config();

const app = express();

// Start the server
app.listen(4000, () => {
	console.clear();
	console.log(`Express app http://localhost:4000`);
});

// Parse request bodies as JSON
app.use(express.json());

// Parse URL-encoded request bodies
app.use(
	express.urlencoded({
		extended: true,
	})
);

// Register UserRouter for handling user-related routes
app.use("/api/", ProductRouter);
app.use("/api/", initRouter);
app.use("/api/", CategoryRouter);
app.use("/api/", ReviewRouter);
app.use("/api", UserRouter);
app.use("/api", brandRouter)