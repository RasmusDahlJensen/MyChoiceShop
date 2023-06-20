import express from "express"
import dotenv from "dotenv";
import { initRouter } from "./routes/init.sequelize.js";

dotenv.config();

const app = express()

app.use(initRouter)

app.listen(4000, () => {
    console.clear();
    console.log("Server is listening on port 4000");
})