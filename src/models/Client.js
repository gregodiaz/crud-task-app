import { DataTypes } from "sequelize";
import { sequelize } from "./";

const prop = (type, obj = {}) => ({
  type: DataTypes[type],
  allowNull: false,
  ...obj,
});

const Client = sequelize.define("clients", {
  businessName: prop("STRING"),
  cuit: prop("INTEGER"),
  owner: prop("STRING"),
  franchises: prop("INTEGER"),
  active: prop("BOOLEAN", { defaultValue: true }),
});

export default Client;
