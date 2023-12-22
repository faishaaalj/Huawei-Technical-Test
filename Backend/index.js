import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log("Database Connected.....")
    await Users.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.use(express.json());
app.use(router);

app.listen(process.env.CONFIG_PORT_DB, ()=> console.log(`Server running at port ${process.env.CONFIG_PORT_DB}`))
