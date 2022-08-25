import { sequelize } from "./connection";
import "./associations";

export const syncTables = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("All tables synchronized");

  } catch (error) {
    console.log("error:", error);
  }
};
