import express from "express"
import dotenv from "dotenv";
import mysql from "mysql2";
import { sequelize } from "./config/db.sequelize.js";

const app = express();

app.listen(4000, async () => {
    console.clear()
    console.log("listening on port 4000");
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})

