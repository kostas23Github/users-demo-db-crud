import { DataTypes } from "sequelize";
import sequelize from "../../../db.js";

// Create a Model named User.
// An instance is a row of this model's database table.
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here.
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user_table",
    timestamps: false
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

export default User;