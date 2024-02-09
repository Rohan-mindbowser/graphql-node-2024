import { DataTypes } from "sequelize";
import { sequelize } from "../utils/dbConnection";

export const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
  },

  password: {
    type: DataTypes.INTEGER,
  },
});

User.sync().then(() => {
  console.log("User Model synced");
});
