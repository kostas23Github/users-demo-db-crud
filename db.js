// db.js
import { Sequelize } from "sequelize";
import config from "./config.json" with { type: "json" };

// Get db data.
const { host, user, password, database } = config.database;

// Connect to MySQL local db.
const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});

export default sequelize;
