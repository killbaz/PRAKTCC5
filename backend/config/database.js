import { Sequelize } from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA', 'root', '', {
    host: '34.121.249.104',
    dialect: 'mysql'
});

export default db;