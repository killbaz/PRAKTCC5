import { Sequelize } from "sequelize";

const db = new Sequelize('notes_db', 'root', '', {
    host: '35.224.41.166',
    dialect: 'mysql'
});

export default db;