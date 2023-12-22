import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const {CONFIG_NAME_DB, CONFIG_USERNAME_DB, CONFIG_HOST_DB } = process.env;

const db = new Sequelize(CONFIG_NAME_DB, CONFIG_USERNAME_DB, '', {
    host: CONFIG_HOST_DB,
    dialect: "mysql"
});

export default db;
