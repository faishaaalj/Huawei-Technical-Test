import { Sequelize } from "sequelize";

const db = new Sequelize('huawei_test_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;