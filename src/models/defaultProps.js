import { DataTypes } from "sequelize";

export const prop = (type, moreProps = {}) => ({
  type: DataTypes[type],
  allowNull: false,
  ...moreProps,
});

