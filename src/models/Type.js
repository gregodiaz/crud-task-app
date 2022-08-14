import { DataTypes } from "sequelize";
import { sequelize } from "./";

const prop = (type, obj = {}) => ({
  type: DataTypes[type],
  allowNull: false,
  ...obj,
});

const Type = sequelize.define("types", {
  description: prop("STRING"),
});

export default Type;
