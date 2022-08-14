import { DataTypes } from "sequelize";
import { sequelize } from "./";

const prop = (type, obj = {}) => ({
  type: DataTypes[type],
  allowNull: false,
  ...obj,
});

const Task = sequelize.define("tasks", {
  // state: prop("STRING", { defaultValue: "required" }),
  state: prop("INTEGER", { defaultValue: 1 }),
  priority: prop("INTEGER", { defaultValue: 0 }),
  title: prop("STRING"),
  responsible: prop("INTEGER"),
  client: prop("INTEGER"),
  updates: prop("INTEGER"),
  done: prop("BOOLEAN", { defaultValue: false }),
});

export default Task;
