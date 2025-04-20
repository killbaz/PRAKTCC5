import { Sequelize } from "sequelize";

const db = new Sequelize('notes_db', 'root', '', {
    host: '34.121.249.104',
    dialect: 'mysql'
});

export default db;