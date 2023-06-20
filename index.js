import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
connection.end();
