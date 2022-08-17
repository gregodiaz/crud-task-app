import { sequelize } from "./connection";
import { syncAssociations } from "./associations";

export const syncTables = async () => {
  syncAssociations();
  try {
    await sequelize.sync({ alter: true });
    console.log("All tables synchronized");

  } catch (error) {
    console.log("error:", error);
  }
};
