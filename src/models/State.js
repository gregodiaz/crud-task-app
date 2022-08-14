import { DataTypes } from "sequelize";
import { sequelize } from "./";

const prop = (type, obj = {}) => ({
  type: DataTypes[type],
  allowNull: false,
  ...obj,
});

const State = sequelize.define("states", {
  description: prop("STRING"),
});

export default State;
