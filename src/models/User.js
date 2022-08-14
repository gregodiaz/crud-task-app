import { DataTypes } from "sequelize";
import { sequelize } from "./";

const prop = (type, obj = {}) => ({
  type: DataTypes[type],
  allowNull: false,
  ...obj,
});

const User = sequelize.define("users", {
  firstName: prop("STRING"),
  lastName: prop("STRING"),
  active: prop("BOOLEAN", { defaultValue: true }),
});

export default User;
