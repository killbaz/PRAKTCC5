import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Note = db.define("notes", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Note;

(async () => {
  await db.sync();
})();