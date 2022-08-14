import { DataTypes } from "sequelize";
import { sequelize } from "./";

const prop = (type, obj = {}) => ({
  type: DataTypes[type],
  allowNull: false,
  ...obj,
});

const Update = sequelize.define("updates", {
  author: prop("INTEGER"),
  description: prop("STRING"),
  type: prop("INTEGER"),
});

export default Update;
